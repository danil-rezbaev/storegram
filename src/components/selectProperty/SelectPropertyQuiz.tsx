import React, { FC, useCallback, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../../assets/images/pages/catalog/close.svg'
import BottomPopup from '../../components/bottomPopup/BottomPopup'
import { Fields, ProductItemProperties, ProductItemPropertiesValue } from '../../layout/types/catalog/productsDataTypes'
import SelectPropertyAnswer from './SelectPropertyAnswer'
import _ from 'lodash'
import { useAppDispatch } from '../../hooks/redux'
import { addProperties } from '../../store/basketSlice'

export type SelectPropertyQuizProps = ProductItemProperties & {
  productId: number,
  show: boolean,
  showHandle: (value: boolean) => void,
  selectedHandle: (value: boolean) => void,
}

const SelectPropertyQuiz: FC<SelectPropertyQuizProps> = (props) => {
  const {
    productId,
    title,
    values,
    show,
    showHandle,
    selectedHandle
  } = props

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  const handleClose = () => showHandle(false)

  const [checkList, setCheckList] = useState<ProductItemPropertiesValue[]>([])

  useEffect(() => {
    selectedHandle(checkList.length > 0)
  }, [checkList])

  const isExist = useCallback((value: ProductItemPropertiesValue): boolean => (
    Boolean(_.find(checkList, (item) => (item.id === value.id)))
  ), [checkList])

  const checkListHandler = useCallback((value: ProductItemPropertiesValue, type: Fields): void => {
    const result = isExist(value)

    if (result) {
      setCheckList(array => _.filter(array, (item) => (
        item.id !== value.id
      )))
    } else {
      if (type === 'checkbox') {
        setCheckList(array => [...array, value])
      } else if (type === 'radio') {
        setCheckList([value])
      }
    }
  }, [isExist, checkList])

  const dispatch = useAppDispatch()

  const nextButtonHandle = useCallback(() => {
    dispatch(addProperties({ productId, checkList, questionTitle: title }))
    handleClose()
  }, [checkList])

  return (
    <BottomPopup
      title={titleFormat}
      visible={show}
      visibleHandle={showHandle}
      className="select-property-quiz"
    >
      <div className='select-property-quiz--content'>
        <Button
          className="select-property-quiz--close-btn border-0"
          onClick={handleClose}>
          <CloseIcon/>
        </Button>

        {values.map((item) => (
          <SelectPropertyAnswer
            key={item.id}
            id={item.id}
            title={item.title}
            type="checkbox"
            priceChange={item.priceChange}
            checkList={checkList}
            checkListHandler={checkListHandler}
          />
        ))}

        {checkList.length > 0
          ? (
          <Button
            size="lg"
            variant="success"
            className="select-property-quiz--next-btn"
            onClick={nextButtonHandle}
          >
            Выбрать
          </Button>
            )
          : null }
      </div>
    </BottomPopup>
  )
}

export default SelectPropertyQuiz

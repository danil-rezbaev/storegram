import React, { FC, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../../assets/images/pages/catalog/close.svg'
import BottomPopup from '../../components/bottomPopup/BottomPopup'
import { Fields, ProductItemPropertiesValues } from '../../layout/types/catalog/productsDataTypes'
import SelectPropertyAnswer from './SelectPropertyAnswer'
import _ from 'lodash'

export type SelectPropertyQuizProps = {
  title: string,
  properties: ProductItemPropertiesValues[],
  show: boolean,
  showHandle: (value: boolean) => void,
}

const SelectPropertyQuiz: FC<SelectPropertyQuizProps> = (props) => {
  const {
    title,
    properties,
    show,
    showHandle
  } = props

  const handleClose = () => showHandle(false)

  const [checkList, setCheckList] = useState<string[]>([])

  const isExist = useCallback((value: string): boolean => (
    Boolean(_.find(checkList, (item) => (item === value)))
  ), [checkList])

  const checkListHandler = useCallback((value: string, type: Fields): void => {
    const result = isExist(value)

    if (result) {
      setCheckList(array => _.filter(array, (item) => (
        item !== value
      )))
    } else {
      if (type === 'checkbox') {
        setCheckList(array => [...array, value])
      } else if (type === 'radio') {
        setCheckList([value])
      }
    }
  }, [isExist, checkList])

  return (
    <BottomPopup
      title={title}
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

        {properties.map((item) => (
          <SelectPropertyAnswer
            key={item.id}
            type="checkbox"
            title={item.title}
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
          >
            Далее
          </Button>
            )
          : null }
      </div>
    </BottomPopup>
  )
}

export default SelectPropertyQuiz

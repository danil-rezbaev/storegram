import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import SelectPropertyAnswer from './SelectPropertyAnswer'
import _ from 'lodash'
import { useAppDispatch } from '../../hooks/redux'
import { addOptions } from '../../store/basketSlice'
import cs from 'classnames'

export type SelectPropertyQuizProps = ProductItemOptions & {
  productId: number,
  show: boolean,
  selectedHandle: (id: string | number, action: string) => void,
}

const SelectPropertyQuiz: FC<SelectPropertyQuizProps> = (props) => {
  const {
    id,
    productId,
    title,
    values,
    show,
    type,
    selectedHandle
  } = props

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  const [checkList, setCheckList] = useState<ProductItemOptionsValue[]>([])
  const visible = useMemo(() => show, [show])

  useEffect(() => {
    const action = checkList.length > 0 ? 'remove' : 'push'
    selectedHandle(id, action)
  }, [checkList])

  const isExist = useCallback((value: ProductItemOptionsValue): boolean => (
    Boolean(_.find(checkList, (item) => (item.id === value.id)))
  ), [checkList])

  const checkListHandler = useCallback((value: ProductItemOptionsValue, type: Fields): void => {
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

  useEffect(() => {
    dispatch(addOptions({ productId, checkList, questionTitle: title }))
  }, [checkList])

  return (
    <div className={cs('select-property-quiz', !visible ? 'd-none' : null)}>
      <div className='select-property-quiz--content'>
        <h2 className="select-property-quiz--title">{titleFormat}</h2>

        {values.map((item) => (
          <SelectPropertyAnswer
            key={item.id}
            id={item.id}
            title={item.title}
            type={type}
            priceChange={item.priceChange}
            checkList={checkList}
            checkListHandler={checkListHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectPropertyQuiz

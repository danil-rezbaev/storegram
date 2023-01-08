import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import SelectPropertyAnswer from './SelectPropertyAnswer'
import _ from 'lodash'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import cs from 'classnames'
import { addOptions, setFilled } from '../../store/optionsQuizSlice'

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

  const dispatch = useAppDispatch()
  const optionsStore = useAppSelector(state => state.optionsQuizSlice)
  const { selectedOptions } = optionsStore

  const selectedOptionsMemo = useMemo(() => selectedOptions ? selectedOptions[productId] : undefined, [selectedOptions])
  const storeOptions: ProductItemOptionsValue[] | undefined = selectedOptionsMemo ? selectedOptionsMemo[title] : undefined

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  useEffect(() => {
    console.log('storeOptions', storeOptions)
  }, [storeOptions])

  const [checkList, setCheckList] = useState<ProductItemOptionsValue[] | undefined>(storeOptions)
  const visible = useMemo(() => show, [show])

  useEffect(() => {
    if (storeOptions) {
      if (storeOptions.length > 0) {
        dispatch(setFilled({ id, filled: true }))
        selectedHandle(id, 'remove')
      } else if (storeOptions.length === 0) {
        dispatch(setFilled({ id, filled: false }))
        selectedHandle(id, 'push')
      }
    }
  }, [storeOptions])

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
        setCheckList(array => array ? [...array, value] : [value])
      } else if (type === 'radio') {
        setCheckList([value])
      }
    }
  }, [isExist])

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
            checkList={storeOptions}
            checkListHandler={checkListHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectPropertyQuiz

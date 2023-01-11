import React, { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import SelectPropertyAnswer from './SelectPropertyAnswer'
import _ from 'lodash'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import cs from 'classnames'
import { addOptions } from '../../store/optionsQuizSlice'
import { updateChecklist } from '../../store/basketSlice'

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
  const store = useAppSelector(state => state)
  const optionsQuizStore = useAppSelector(state => state.optionsQuiz)
  const productInfoStore = store.productInfo

  const { selectedOptions } = optionsQuizStore

  const { price } = productInfoStore.product

  const selectedOptionsMemo = useMemo(() => selectedOptions ? selectedOptions[productId] : undefined, [selectedOptions])
  const storeOptions: ProductItemOptionsValue[] | undefined = selectedOptionsMemo ? selectedOptionsMemo[title] : undefined

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  const [checkList, setCheckList] = useState<ProductItemOptionsValue[] | undefined>(storeOptions)
  const visible = useMemo(() => show, [show])

  useEffect(() => {
    if (storeOptions) {
      if (storeOptions.length > 0) {
        selectedHandle(id, 'remove')
      } else if (storeOptions.length === 0) {
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
    console.log('checkList', checkList)
    dispatch(addOptions({ id, productId, checkList, questionTitle: title }))
    dispatch(updateChecklist({ productId, checkList: checkList || [], questionTitle: title, price }))
  }, [checkList])

  return (
    <div className={cs('select-property-quiz', !visible ? 'd-none' : null)}>
      <div className='select-property-quiz--content'>
        <h2 className="select-property-quiz--title">{titleFormat}</h2>

        {values.map((item) => (
          <SelectPropertyAnswer
            key={item.id}
            {...item}
            type={type}
            checkList={storeOptions}
            checkListHandler={checkListHandler}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectPropertyQuiz

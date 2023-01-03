import React, { FC, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import { useAppDispatch } from '../../hooks/redux'
import { openModal } from '../../store/propertyQuizSlice'

export type SelectPropertyItemProps = {
  id: number,
  productId: number,
  title: string,
  index: number,
  length: number,
  type: Fields,
  options: ProductItemOptionsValue[],
  optionsArray: ProductItemOptions[],
}

const SelectPropertyItem: FC<SelectPropertyItemProps> = (props) => {
  const {
    productId,
    index,
    length,
    title,
    options,
    optionsArray
  } = props

  const dispatch = useAppDispatch()
  // const store = useAppSelector(state => state)
  // const basket = store.basket

  console.log('options\n' +
    'optionsArray', options,
  optionsArray)

  const [selected] = useState<boolean>(false)

  const showModal = useCallback(() => {
    dispatch(openModal({ options: optionsArray, productId, index, length }))
  }, [])

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  return (
    <div className="select-property-item" onClick={showModal}>
      <p className="select-property-item--title">{ titleFormat }</p>

      <Button
        variant={selected ? 'success' : 'dark'}
        size="sm"
        className="text-white"
      >
        {selected ? 'выбрано' : 'выбрать'}
      </Button>
    </div>
  )
}

export default SelectPropertyItem

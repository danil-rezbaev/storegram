import React, { FC, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import SelectPropertyQuiz from './SelectPropertyQuiz'
import { Fields, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'

export type SelectPropertyItemProps = {
  id: number,
  productId: number,
  title: string,
  type: Fields,
  options: ProductItemOptionsValue[],
}

const SelectPropertyItem: FC<SelectPropertyItemProps> = (props) => {
  const {
    id,
    type,
    productId,
    title,
    options
  } = props

  const [modalVisible, setModalVisible] = useState<boolean>(false)
  const [selected, setSelected] = useState<boolean>(false)

  const modalVisibleHandle = useCallback((value: boolean): void => {
    setModalVisible(value)
  }, [])

  const selectedHandle = useCallback((value: boolean): void => {
    setSelected(value)
  }, [])

  const showModal = () => modalVisibleHandle(true)

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  return (
    <div className="select-property-item">
      <p className="select-property-item--title">{ titleFormat }</p>

      <Button
        variant={selected ? 'success' : 'dark'}
        size="sm"
        className="text-white"
        onClick={showModal}
      >
        {selected ? 'выбрано' : 'выбрать'}
      </Button>

      <SelectPropertyQuiz
        id={id}
        productId={productId}
        title={title}
        type={type}
        values={options}
        show={modalVisible}
        showHandle={modalVisibleHandle}
        selectedHandle={selectedHandle}
      />
    </div>
  )
}

export default SelectPropertyItem

import React, { FC, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import SelectPropertyQuiz from './SelectPropertyQuiz'
import { ProductItemPropertiesValues } from '../../layout/types/catalog/productsDataTypes'

export type SelectPropertyItemProps = {
  title: string,
  properties: ProductItemPropertiesValues[],
  priceChange: number
}

const SelectPropertyItem: FC<SelectPropertyItemProps> = (props) => {
  const {
    title,
    priceChange,
    properties
  } = props

  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const modalVisibleHandle = useCallback((value: boolean): void => {
    setModalVisible(value)
  }, [])

  const showModal = () => modalVisibleHandle(true)

  const titleFormat = `Выбрать ${title.toLowerCase()}`

  return (
    <div className="select-property-item">
      <p className="select-property-item--title">{ titleFormat }</p>

      <Button
        variant="black"
        size="sm"
        className="select-property-item--button"
        onClick={showModal}
      >
        выбрать
      </Button>

      <SelectPropertyQuiz
        title={title}
        properties={properties}
        show={modalVisible}
        showHandle={modalVisibleHandle}
        priceChange={priceChange}
      />
    </div>
  )
}

export default SelectPropertyItem

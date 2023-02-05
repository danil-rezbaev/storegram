import React, { FC, useCallback } from 'react'
import { Fields, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import RenderPrice from '../RenderPrice'
import SelectField from '../SelectField'

export type SelectPropertyAnswerProps = {
  value: ProductItemOptionsValue,
  type: Fields,
  active: boolean,
  handler: (value: ProductItemOptionsValue, type: Fields) => void
}

const SelectOptionsAnswer: FC<SelectPropertyAnswerProps> = (props) => {
  const {
    value,
    type,
    active,
    handler
  } = props

  const {
    title,
    priceChange
  } = value

  const selectedHandler = useCallback(() => {
    handler(value, type)
  }, [])

  return (
    <SelectField
      title={title}
      active={active}
      type={type}
      onClick={selectedHandler}
      className="select-options-answer"
    >
      <RenderPrice price={priceChange} className="select-options-answer--price" />
    </SelectField>
  )
}

export default SelectOptionsAnswer

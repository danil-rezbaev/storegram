import React, { FC, useCallback, useMemo } from 'react'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'
import RenderPrice from '../RenderPrice'
import SelectField from '../SelectField'

export type SelectPropertyAnswerProps = Omit<ProductItemOptionsValue, 'productId'> & Pick<ProductItemOptions, 'type'> & {
  checkList: ProductItemOptionsValue[] | undefined,
  checkListHandler: (value: ProductItemOptionsValue, type: Fields) => void,
}

const SelectPropertyAnswer: FC<SelectPropertyAnswerProps> = (props) => {
  const {
    id,
    title,
    type,
    priceChange,
    checkList,
    checkListHandler
  } = props

  const isActive = useMemo(() => {
    const findFunc = checkList?.find((item) => {
      return item.id === id
    })

    return !!findFunc
  }, [checkList])

  const selectedHandler = useCallback(() => {
    const newObj = { id, title, priceChange }
    checkListHandler(newObj, type)
  }, [checkList])

  return (
    <SelectField
      title={title}
      active={isActive}
      type={type}
      onClick={selectedHandler}
      className="select-property-answer"
    >
      <RenderPrice price={priceChange} className="select-property-answer--price" />
    </SelectField>
  )
}

export default SelectPropertyAnswer

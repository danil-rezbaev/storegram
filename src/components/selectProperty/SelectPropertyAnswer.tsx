import React, { FC, useCallback, useMemo } from 'react'
import cs from 'classnames'
import { ReactComponent as CheckIcon } from '../../assets/images/pages/catalog/check.svg'
import { Fields, ProductItemOptions, ProductItemOptionsValue } from '../../layout/types/catalog/productsDataTypes'

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
    return checkList?.find((item) => {
      return item.id === id
    })
  }, [checkList])

  const selectedHandler = useCallback(() => {
    const newObj = { id, title, priceChange }
    checkListHandler(newObj, type)
  }, [checkList])

  return (
    <button
      type="button"
      className={ cs('select-property-answer', isActive ? 'selected' : null) }
      onClick={selectedHandler}
      >
      <div className={ cs('select-property-answer--field', type) }>
        <CheckIcon className="icon"/>
      </div>

      <p className="select-property-answer--title">{title}</p>

      <span className="select-property-item--price">
        { priceChange }
      </span>
    </button>
  )
}

export default SelectPropertyAnswer

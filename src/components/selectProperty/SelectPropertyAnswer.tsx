import React, { FC, useCallback, useMemo } from 'react'
import cs from 'classnames'
import { ReactComponent as CheckIcon } from '../../assets/images/pages/catalog/check.svg'
import { Fields, ProductItemPropertiesValue } from '../../layout/types/catalog/productsDataTypes'

export type SelectPropertyAnswerProps = {
  id: number,
  title: string,
  priceChange: number,
  type: 'radio' | 'checkbox',
  checkList: ProductItemPropertiesValue[],
  checkListHandler: (value: ProductItemPropertiesValue, type: Fields) => void,
}

const SelectPropertyAnswer: FC<SelectPropertyAnswerProps> = (props) => {
  const {
    id,
    title,
    type,
    priceChange = 0,
    checkList,
    checkListHandler
  } = props

  const isActive = useMemo(() => {
    return checkList.find((item) => {
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

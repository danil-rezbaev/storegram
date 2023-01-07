import React, { FC, useMemo } from 'react'
import { ProductItemStore } from '../../../layout/types/catalog/productsDataTypes'
import _ from 'lodash'

export type BasketProductOptionsProps = Pick<ProductItemStore, 'currentOptions'>

const BasketProductOptions: FC<BasketProductOptionsProps> = (props) => {
  const {
    currentOptions
  } = props

  const optionsMemo = useMemo(() => {
    return _.entries(currentOptions).map(([key, value]) => (
      [key, _.values(value).map((item) => item.title).join(', ')]
    ))
  }, [currentOptions])

  return (
    <ul className="basket-product-options">
      {optionsMemo.map(([title, values]) => (
        <li key={title} className="options--item">
          <b>{title}</b>: {values}
        </li>
      ))}
    </ul>
  )
}

export default BasketProductOptions

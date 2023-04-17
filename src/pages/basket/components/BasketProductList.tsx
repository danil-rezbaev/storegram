import React, { FC } from 'react'
import BasketProductCard from './BasketProductCard'
import _ from 'lodash'
import { BasketState } from '../../../store/basket/basketSlice'

export type BasketProductListProps = {
  basketStore: BasketState
}

const BasketProductList: FC<BasketProductListProps> = (props) => {
  const {
    basketStore
  } = props

  const basketProducts = basketStore.products
  const values = _.values(basketProducts)
  const basketProductsValid = _.filter(values, (item) => item.count > 0)

  return (
    <div className="basket-product-list">
       { basketProductsValid.map((item) => (
         <BasketProductCard
           key={item.uniqueId}
           {...item}
         />
       ))}
    </div>
  )
}

export default BasketProductList

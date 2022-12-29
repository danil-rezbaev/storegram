import React, { FC } from 'react'
import BasketProductCard from './BasketProductCard'
import { useAppSelector } from '../../../hooks/redux'
import _ from 'lodash'

export type BasketProductListProps = unknown

const BasketProductList: FC<BasketProductListProps> = () => {
  const basket = useAppSelector(state => state.basket)
  const basketProducts = _.values(basket.products)

  return (
    <div className="basket-product-list">
       { basketProducts.map(item => (
          <BasketProductCard
            key={item.id}
            {...item}
          />
       )) }
    </div>
  )
}

export default BasketProductList

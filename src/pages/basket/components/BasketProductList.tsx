import React, { FC } from 'react'
import BasketProductCard from './BasketProductCard'
import { useAppSelector } from '../../../hooks/redux'

export type BasketProductListProps = unknown

const BasketProductList: FC<BasketProductListProps> = () => {
  const basket = useAppSelector(state => state.basket)

  return (
    <div className="basket-product-list">
       { basket.products.map(item => (
          <BasketProductCard
            key={item.id}
            {...item}
          />
       )) }
    </div>
  )
}

export default BasketProductList

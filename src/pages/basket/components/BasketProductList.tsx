import React, { FC } from 'react'
import { ProductItemStore } from '../../../layout/types/catalog/productsDataTypes'
import BasketProductCard from './BasketProductCard'

export type BasketProductListProps = {
  products: ProductItemStore[]
}

const BasketProductList: FC<BasketProductListProps> = (props) => {
  const {
    products
  } = props

  return (
    <div className="basket-product-list">
       { products.map(item => (
          <BasketProductCard
            key={item.id}
            {...item}
          />
       )) }
    </div>
  )
}

export default BasketProductList

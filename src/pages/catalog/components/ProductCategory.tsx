import React, { FC } from 'react'
import ProductCard from './ProductCard'
import { Product } from '../../basket/BasketTypes'
import { Category } from '../../../layout/types/Category'

export type ProductCategoryProps = {
  category?: Category,
  items: Product[],
}

const ProductCategory: FC<ProductCategoryProps> = (props) => {
  const {
    category,
    items
  } = props

  if (!category) return null

  const {
    title,
    code
  } = category

  return (
    <div className="product-category" id={code}>
      <b className="product-category--title">{title}</b>
      <div className="product-category--container">
        { items.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCategory

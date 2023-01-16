import React, { FC } from 'react'
import ProductCard from './ProductCard'
import { Category, ProductItem } from '../../../layout/types/catalog/productsDataTypes'

export type ProductCategoryProps = {
  category: Category | undefined,
  items: ProductItem[],
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
    <div className="product-category" id={ `category-${code}` }>
      <b className="product-category--title">{title}</b>
      <div className="product-category--container">
        { items.map((product) => (
          <ProductCard
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductCategory

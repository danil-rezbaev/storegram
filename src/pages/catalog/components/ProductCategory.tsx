import React, { FC } from 'react'
import ProductCard, { ProductCardProps } from './ProductCard'
import { CategoryItemProps } from './CategoryItem'

export type ProductCategoryProps = {
  category: CategoryItemProps
  items: ProductCardProps[],
}

const ProductCategory: FC<ProductCategoryProps> = (props) => {
  const {
    category,
    items
  } = props

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

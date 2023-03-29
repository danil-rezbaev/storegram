import React, { FC } from 'react'
import ProductCategory from './ProductCategory'
import _ from 'lodash'
import { Category, ProductItem } from '../../../layout/types/catalog/productsDataTypes'

export type ProductListProps = {
  products: ProductItem[],
  categories: Category[],
}

const ProductList: FC<ProductListProps> = (props) => {
  const {
    products,
    categories
  } = props

  const group = _.groupBy(products, 'category')
  const productCategories = _.entries(group)
  const matchCategory = (category: string) => _.find(categories, (item) => item.code === category)

  return (
    <div className="product-list">
      { _.map(productCategories, ([key, value]) => (
        <ProductCategory
          key={key}
          category={matchCategory(key)}
          items={value}
        />
      ))}
    </div>
  )
}

export default ProductList

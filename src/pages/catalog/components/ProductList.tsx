import React, { FC } from 'react'
import ProductCategory from './ProductCategory'
import _ from 'lodash'
import { Product } from '../../basket/BasketTypes'
import { Category } from '../../../layout/types/Category'

export type ProductListProps = {
  products: Product[],
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

  if (!products.length) {
    return (
      <p>
        Товары не найдены
      </p>
    )
  }

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

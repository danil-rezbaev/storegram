import React, { FC, useCallback, useMemo } from 'react'
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

  const productCategories = useMemo(() => {
    const group = _.groupBy(products, 'category')
    return _.entries(group)
  }, [products])

  const matchCategory = useCallback((category: string) => _.find(categories, (item) => item.code === category), [])

  return (
    <div className="product-list">
      { productCategories.map(([key, value]) => (
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

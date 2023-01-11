import React, { FC } from 'react'
import { productsData } from '../../../layout/data/catalog/productsData'
import ProductCategory from './ProductCategory'

const ProductList: FC = () => {
  return (
    <div className="product-list">
      { productsData.map((category) => (
        <ProductCategory
          key={category.id}
          {...category}
        />
      ))}
    </div>
  )
}

export default ProductList

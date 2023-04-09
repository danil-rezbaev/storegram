import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'
import _ from 'lodash'
import ProductCardLoader from './ProductCardLoader'

export type ProductContentLoaderProps = unknown

const ProductContentLoader: FC<ProductContentLoaderProps> = () => (
  <div className="product-content-loader">
    <ContentLoader
      speed={2}
      width={100}
      height={24}
      viewBox="0 0 100 24"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="0" y="0" rx="0" ry="0" width="100" height="24" />
    </ContentLoader>

    <div className="product-content-loader--container">
      { _.map([1, 2, 3, 4], () => (
        <ProductCardLoader />
      )) }
    </div>
  </div>
)

export default ProductContentLoader

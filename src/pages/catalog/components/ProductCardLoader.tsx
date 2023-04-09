import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

export type ProductCardLoaderProps = unknown

const ProductCardLoader: FC<ProductCardLoaderProps> = () => (
  <ContentLoader
    speed={2}
    width={192}
    height={240}
    viewBox="0 0 192 240"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    style={{
      borderRadius: '1rem'
    }}
  >
    <rect x="0" y="0" rx="0" ry="0" width="192" height="240" />
  </ContentLoader>
)

export default ProductCardLoader

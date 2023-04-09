import React, { FC } from 'react'
import ContentLoader from 'react-content-loader'

export type CategoryListLoaderProps = unknown

const CategoryListLoader: FC<CategoryListLoaderProps> = () => (
  <ContentLoader
    speed={2}
    width={340}
    height={31}
    viewBox="0 0 340 31"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="15" ry="0" width="80" height="31" />
    <rect x="85" y="0" rx="15" ry="0" width="70" height="31" />
    <rect x="160" y="0" rx="15" ry="0" width="60" height="31" />
    <rect x="225" y="0" rx="15" ry="0" width="100" height="31" />
  </ContentLoader>
)

export default CategoryListLoader

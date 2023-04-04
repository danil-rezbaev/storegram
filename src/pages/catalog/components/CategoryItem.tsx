import React, { FC } from 'react'
import cs from 'classnames'
import { Category } from '../../../layout/types/Category'

export type CategoryItemProps = Category & {
  isActive: boolean,
  activeHandler: (code: string) => void
}

const CategoryItem: FC<CategoryItemProps> = (props) => {
  const {
    title,
    code,
    isActive,
    activeHandler
  } = props

  const handler = () => activeHandler(code)

  return (
    <button
      type="button"
      className={cs('category-item btn btn-sm', isActive ? 'btn-secondary' : 'btn-light')}
      onClick={handler}
    >
      {title}
    </button>
  )
}

export default CategoryItem

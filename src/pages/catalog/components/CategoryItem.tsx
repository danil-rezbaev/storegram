import React, { FC } from 'react'
import cs from 'classnames'
import { Category } from '../../../layout/types/Category'

export type CategoryItemProps = Category & {
  active: boolean,
  activeHandler: (code: string) => void
}

const CategoryItem: FC<CategoryItemProps> = (props) => {
  const {
    title,
    code,
    active,
    activeHandler
  } = props

  const handler = () => activeHandler(code)

  return (
    <button
      type="button"
      className={cs('category-item btn btn-sm', active ? 'btn-secondary' : 'btn-light')}
      onClick={handler}
    >
      {title}
    </button>
  )
}

export default CategoryItem

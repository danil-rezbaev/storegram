import React, { FC, useCallback } from 'react'
import cs from 'classnames'

export type CategoryItemProps = {
  title: string,
  code: string,
  visibleCategory?: string | null
}

const CategoryItem: FC<CategoryItemProps> = (props) => {
  const {
    title,
    code,
    visibleCategory
  } = props

  const handleClick = useCallback(() => {
    const yOffset = -100
    const element = document.getElementById(`category-${code}`)

    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  return (
    <button
      type="button"
      className={cs('category-item', visibleCategory === `category-${code}` ? 'active' : null)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CategoryItem

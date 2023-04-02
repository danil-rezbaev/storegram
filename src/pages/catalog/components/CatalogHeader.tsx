import React, { FC, useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import { Category } from '../../../layout/types/Category'

export type CatalogHeaderProps = {
  categories: Category[]
}

const CatalogHeader: FC<CatalogHeaderProps> = (props) => {
  const {
    categories
  } = props

  const initialCategory = categories[0]?.code ?? null
  const [visibleCategory, setVisibleCategory] = useState<string | null>(initialCategory)

  useEffect(() => {
    const categories = Array.prototype.slice
      .call(document.querySelectorAll('.product-category'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          const code = entry.target.getAttribute('id')

          if (code) {
            window.location.hash = `navigation-${code}`
            setVisibleCategory(code)
          }
        }
      })
    }, {
      threshold: 0.75
    })

    categories?.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      categories?.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return (
    <div className="catalog-header">
      <CategoryList
        visibleCategory={visibleCategory}
        categories={categories}
      />
    </div>
  )
}

export default CatalogHeader

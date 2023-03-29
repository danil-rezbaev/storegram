import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import { categoriesData } from '../../../layout/data/catalog/categoriesData'

const CatalogHeader = () => {
  const initialCategory = categoriesData[0].code ?? null
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
        categories={categoriesData}
      />
    </div>
  )
}

export default CatalogHeader

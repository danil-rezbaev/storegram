import React, { useEffect, useState } from 'react'
import CategoryList from './CategoryList'
import { categoriesData } from '../../../layout/data/catalog/categoriesData'

const CatalogHeader = () => {
  const [visibleCategory, setVisibleCategory] = useState<string | null>(null)

  useEffect(() => {
    const categories = Array.prototype.slice
      .call(document.querySelectorAll('.product-category'))

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target) {
          setVisibleCategory(entry.target.getAttribute('id'))
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
    <div className="catalog--header">
      <CategoryList
        visibleCategory={visibleCategory}
        categories={categoriesData}
      />
    </div>
  )
}

export default CatalogHeader

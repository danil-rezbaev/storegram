import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
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
  const [categoriesArray, setCategoriesArray] = useState<Array<any>>([])
  const [visibleCategory, setVisibleCategory] = useState<string | null>(initialCategory)

  useLayoutEffect(() => {
    setTimeout(() => {
      const categoriesList = Array.prototype.slice
        .call(document.querySelectorAll('.product-category'))
      setCategoriesArray(categoriesList)
    }, 2000)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting, entry.target)
        if (entry.isIntersecting && entry.target) {
          const code = entry.target.getAttribute('id')

          if (code) {
            window.location.hash = `navigation-${code}`
            setVisibleCategory(code)
          }
        }
      })
    }, {
      threshold: 0.9
    })

    categoriesArray?.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      categoriesArray?.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [categoriesArray])

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

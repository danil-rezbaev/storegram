import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList'
import { Container } from 'react-bootstrap'
import GoInBasketButton from './components/GoInBasketButton'

function CatalogPage () {
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
    <div className="catalog-page">
      <Container>
        <div className="catalog-page--header">
          <CategoryList
            visibleCategory={visibleCategory}
          />
        </div>

        <div className="catalog-page--body">
          <ProductList />
        </div>

        <GoInBasketButton/>
      </Container>
    </div>
  )
}

export default CatalogPage

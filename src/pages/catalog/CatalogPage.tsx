import React, { useEffect, useState } from 'react'
import ProductList from './components/ProductList'
import CategoryList from './components/CategoryList'
import GoInBasketButton from './components/GoInBasketButton'
import ProductInfoModal from '../../modals/ProductInfoModal'
import SelectPropertyModal from '../../modals/SelectPropertyModal'
import { productsData } from '../../layout/data/catalog/productsData'
import { categoriesData } from '../../layout/data/catalog/categoriesData'
import Page from '../../components/page/Page'

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
    <Page className="page--catalog">
      <div className="catalog--header">
        <CategoryList
          visibleCategory={visibleCategory}
          categories={categoriesData}
        />
      </div>

      <div className="catalog--body">
        <ProductList
          products={productsData}
          categories={categoriesData}
        />
      </div>

      <GoInBasketButton className="catalog--control"/>

      <ProductInfoModal />
      <SelectPropertyModal />
    </Page>
  )
}

export default CatalogPage

import React from 'react'
import ProductList from './components/ProductList'
import GoInBasketButton from './components/GoInBasketButton'
import ProductInfoModal from '../../modals/ProductInfoModal'
import { productsData } from '../../layout/data/catalog/productsData'
import { categoriesData } from '../../layout/data/catalog/categoriesData'
import Page from '../../components/page/Page'
import CatalogHeader from './components/CatalogHeader'

function CatalogPage () {
  return (
    <Page className="page--catalog">
      <CatalogHeader/>

      <div className="catalog--body">
        <ProductList
          products={productsData}
          categories={categoriesData}
        />
      </div>

      <GoInBasketButton className="catalog--control"/>

      <ProductInfoModal />
    </Page>
  )
}

export default CatalogPage

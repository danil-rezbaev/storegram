import React, { useEffect } from 'react'
import ProductList from './components/ProductList'
import GoInBasketButton from './components/GoInBasketButton'
import ProductInfoModal from '../../modals/ProductInfoModal'
import Page from '../../components/page/Page'
import CatalogHeader from './components/CatalogHeader'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchGetStore } from '../../store/storeSlice'

function CatalogPage () {
  const { status, data } = useAppSelector(store => store.storeInfo)
  const { _id, products, categories } = data
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!status && _id) {
      dispatch(fetchGetStore({ id: _id }))
    }
  }, [])

  if (!_id) {
    return (
      <p>
        404 магазин не найден
      </p>
    )
  }

  return (
    <Page className="page--catalog">
       <CatalogHeader categories={categories} />

       <div className="catalog--body">
        <ProductList
          products={products}
          categories={categories}
        />
       </div>

       <GoInBasketButton className="catalog--control"/>

       <ProductInfoModal />
    </Page>
  )
}

export default CatalogPage

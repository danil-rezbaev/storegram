import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CatalogPage from './pages/catalog/CatalogPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import { Provider } from 'react-redux'
import store from './store'
import BasketPage from './pages/basket/BasketPage'
import PlaceOrderPage from './pages/placeOrder/PlaceOrderPage'
import './assets/scss/app.scss'

function App () {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route index path={'/'} element={<CatalogPage/>} />
          <Route path={'basket'} element={<BasketPage/>} />
          <Route path={'place-order'} element={<PlaceOrderPage/>} />
          <Route path={'*'} element={<NotFoundPage/>} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App

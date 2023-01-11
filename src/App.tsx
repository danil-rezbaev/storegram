import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/scss/app.scss'
import CatalogPage from './pages/catalog/CatalogPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import { Provider } from 'react-redux'
import store from './store'
import BasketPage from './pages/basket/BasketPage'

function App () {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route index path={'catalog'} element={<CatalogPage/>} />
          <Route path={'basket'} element={<BasketPage/>} />
          <Route path={'*'} element={<NotFoundPage/>} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App

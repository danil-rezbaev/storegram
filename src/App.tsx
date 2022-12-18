import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './assets/scss/app.scss'
import MainPage from './pages/main/MainPage'
import CatalogPage from './pages/catalog/CatalogPage'
import NotFoundPage from './pages/notFound/NotFoundPage'
import { Provider } from 'react-redux'
import store from './store'

function App () {
  return (
    <Provider store={store}>
      <div className="app">
        <Routes>
          <Route index element={<MainPage/>} />
          <Route path={'catalog'} element={<CatalogPage/>} />
          <Route path={'*'} element={<NotFoundPage/>} />
        </Routes>
      </div>
    </Provider>
  )
}

export default App

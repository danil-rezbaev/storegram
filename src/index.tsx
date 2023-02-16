import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './i18n'
import { Spinner } from 'react-bootstrap'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
    <Suspense
      fallback={
        <Spinner animation="border" variant="success" />
    }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
)

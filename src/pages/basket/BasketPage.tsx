import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import BasketEmpty from './components/BasketEmpty'
import BasketContent from './components/BasketContent'
import Page from '../Page'

function BasketPage () {
  const basketStore = useAppSelector(state => state.basket)

  return (
    <Page className="page--basket">
      { basketStore.quantity > 0
        ? <BasketContent/>
        : <BasketEmpty/>
      }
    </Page>
  )
}

export default BasketPage

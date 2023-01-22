import React from 'react'
import { useAppSelector } from '../../hooks/redux'
import BasketEmpty from './components/BasketEmpty'
import BasketContent from './components/BasketContent'
import Page from '../../components/page/Page'

function BasketPage () {
  const basketStore = useAppSelector(state => state.basket)
  const isBasketEmpty = basketStore.quantity === 0

  return (
    <Page className="page--basket">
      { isBasketEmpty
        ? <BasketEmpty/>
        : <BasketContent/>
      }
    </Page>
  )
}

export default BasketPage

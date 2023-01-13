import React from 'react'
import { Container } from 'react-bootstrap'
import { useAppSelector } from '../../hooks/redux'
import BasketEmpty from './components/BasketEmpty'
import BasketContent from './components/BasketContent'

function BasketPage () {
  const basketStore = useAppSelector(state => state.basket)

  return (
    <div className="page page--basket">
      <Container>
        { basketStore.quantity > 0
          ? <BasketContent/>
          : <BasketEmpty/>
        }
      </Container>
    </div>
  )
}

export default BasketPage

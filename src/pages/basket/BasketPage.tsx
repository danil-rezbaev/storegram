import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { ReactComponent as DeleteIcon } from '../../assets/images/pages/basket/delete.svg'
import BasketProductList from './components/BasketProductList'
import { useAppSelector } from '../../hooks/redux'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../assets/images/pages/basket/arrow.svg'

function BasketPage () {
  const basketStore = useAppSelector(state => state.basket)

  return (
    <div className="page page--basket">
      <Container>
        {basketStore.quantity > 0
          ? (
          <main>
            <Link to='/catalog' className="basket--link-btn">
              <ArrowLeft className="icon"/>
              <p className="text">каталог</p>
            </Link>

            <div className="basket--header">
              <h1 className="basket--title">Корзина</h1>

              <Button
                variant="light"
                className="basket--delete-btn bg-transparent border-0">
                <DeleteIcon className="basket--delete-icon"/>
              </Button>
            </div>

            <BasketProductList />
          </main>
            )
          : (
            <main>
              <h2 className="m-auto">Корзина пуста</h2>
              <Link to='/catalog' title="Перейти к покупкам" className="d-block mt-3">Перейти к покупкам</Link>
            </main>
            )
        }
      </Container>
    </div>
  )
}

export default BasketPage

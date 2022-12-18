import React, { FC } from 'react'
import { Button } from 'react-bootstrap'
import { useAppSelector } from '../../../hooks/redux'

export type GoInBasketButtonProps = unknown

const GoInBasketButton: FC<GoInBasketButtonProps> = (props) => {
  const basketStore = useAppSelector(state => state.basket)
  const productsStore = basketStore.products
  const productsCount = productsStore.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)

  return (
    productsCount > 0
      ? (
      <div className="catalog-page--control">
        <Button
          variant="success"
          className="text-white w-100"
          size="lg"
        >
          В корзине { basketStore.quantity } товар на сумму { basketStore.amount }
        </Button>
      </div>
        )
      : null
  )
}

export default GoInBasketButton

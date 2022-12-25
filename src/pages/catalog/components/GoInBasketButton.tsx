import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'

export type GoInBasketButtonProps = unknown

const GoInBasketButton: FC<GoInBasketButtonProps> = (props) => {
  const basketStore = useAppSelector(state => state.basket)
  const productsStore = basketStore.products
  const productsCount = productsStore.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)

  return (
    productsCount > 0
      ? (
      <BottomButton className="goInBasketButton">
        В корзине { basketStore.quantity } товар на сумму { basketStore.amount }
      </BottomButton>
        )
      : null
  )
}

export default GoInBasketButton

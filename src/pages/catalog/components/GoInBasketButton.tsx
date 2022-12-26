import React, { FC } from 'react'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'
import cs from 'classnames'
import { useNavigate } from 'react-router-dom'

export type GoInBasketButtonProps = {
  className?: string
}

const GoInBasketButton: FC<GoInBasketButtonProps> = (props) => {
  const { className } = props

  const basketStore = useAppSelector(state => state.basket)
  const productsStore = basketStore.products
  const productsCount = productsStore.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)

  const navigate = useNavigate()

  const onclick = () => {
    navigate('/basket')
  }

  return (
    productsCount > 0
      ? (
      <BottomButton
        className={cs('goInBasketButton', className)}
        onClick={onclick}
      >
        В корзине { basketStore.quantity } товар на сумму { basketStore.amount }
      </BottomButton>
        )
      : null
  )
}

export default GoInBasketButton

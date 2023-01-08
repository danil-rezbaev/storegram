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
  const navigate = useNavigate()

  const onclick = () => {
    navigate('/basket')
  }

  return (
    basketStore.quantity > 0
      ? (
      <BottomButton
        className={cs('goInBasketButton', className)}
        onClick={onclick}
        title='Перейти в корзину'
      />
        )
      : null
  )
}

export default GoInBasketButton

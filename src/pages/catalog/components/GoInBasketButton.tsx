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
  // const productsCount = basketStore.quantity

  // useEffect(() => {
  //   console.log('basketStore.quantity', basketStore.quantity)
  // }, [basketStore])

  // console.log(productsCount)

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
      >
        В корзине { basketStore.quantity } товар на сумму { basketStore.amount }
      </BottomButton>
        )
      : null
  )
}

export default GoInBasketButton

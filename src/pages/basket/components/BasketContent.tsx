import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import BasketProductList from './BasketProductList'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'
import RenderPrice from '../../../components/RenderPrice'
import PageHeader from '../../../components/page/PageHeader'

export type BasketContentProps = unknown

const BasketContent: FC<BasketContentProps> = () => {
  const basketStore = useAppSelector(state => state.basket)
  const amount = basketStore.amount
  const quantity = basketStore.quantity

  const navigate = useNavigate()

  const placeOrderLink = () => {
    navigate('/place-order')
  }

  return (
    <main>
      <PageHeader title="Корзина" backLink="/catalog" />

      <RenderPrice title={`${quantity} товара на сумму`} price={amount} className="h4 d-block mt-4 fw-semibold text-start" />

      <BasketProductList basketStore={basketStore} />

      <BottomButton
        title="Оформить заказ"
        onClick={placeOrderLink}
      />
    </main>
  )
}

export default BasketContent

import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../../../assets/images/pages/basket/arrow-left.svg'
import BasketProductList from './BasketProductList'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'
import RenderPrice from '../../../components/RenderPrice'

export type BasketContentProps = unknown

const BasketContent: FC<BasketContentProps> = () => {
  const basketStore = useAppSelector(state => state.basket)
  const amount = basketStore.amount
  const quantity = basketStore.quantity

  return (
    <main>
      <div className="basket--header">
        <Link to='/catalog' className="basket--link-btn">
          <ArrowLeft className="icon"/>
        </Link>

        <h1 className="basket--title">Корзина</h1>
      </div>

      <RenderPrice title={`${quantity} товара на сумму`} price={amount} className="h4 d-block mt-4 fw-semibold text-start" />

      <BasketProductList />

      <BottomButton
        title="Оформить заказ"
      />
    </main>
  )
}

export default BasketContent

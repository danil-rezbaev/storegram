import React, { FC, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import BasketProductList from './BasketProductList'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'
import RenderPrice from '../../../components/RenderPrice'
import PageHeader from '../../../components/page/PageHeader'
import WayGetting from './WayGetting/WayGetting'
import { receivingMethodData } from '../../../layout/data/basket/receivingMethodsData'
import BasketPriceCalc from './BasketPriceCalc'

export type BasketContentProps = unknown

const BasketContent: FC<BasketContentProps> = () => {
  const basketStore = useAppSelector(state => state.basket)
  const globalStore = useAppSelector(state => state.global)
  const { amount, quantity } = basketStore
  const { wayGetting } = globalStore

  const navigate = useNavigate()

  const placeOrderLink = () => {
    navigate('/place-order')
  }

  const buttonAvailability = useMemo(() => {
    return wayGetting?.filled ?? false
  }, [wayGetting])

  return (
    <main>
      <PageHeader title="Корзина" backLink="/catalog" />

      <RenderPrice title={`${quantity} товара на сумму`} price={amount} className="h4 d-block mt-4 fw-semibold text-start" />

      <BasketProductList basketStore={basketStore} />

      <WayGetting data={receivingMethodData} />

      <BasketPriceCalc />

      <BottomButton
        title="Оформить заказ"
        onClick={placeOrderLink}
        disabled={!buttonAvailability}
      />
    </main>
  )
}

export default BasketContent

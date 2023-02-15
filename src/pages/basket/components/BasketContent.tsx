import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import BasketProductList from './BasketProductList'
import { useAppSelector } from '../../../hooks/redux'
import BottomButton from '../../../components/BottomButton'
import RenderPrice from '../../../components/RenderPrice'
import PageHeader from '../../../components/page/PageHeader'
import BasketPriceCalc from './BasketPriceCalc'
import { useTranslation } from 'react-i18next'

export type BasketContentProps = unknown

const BasketContent: FC<BasketContentProps> = () => {
  const basketStore = useAppSelector(state => state.basket)
  const { amount, quantity } = basketStore

  const navigate = useNavigate()
  const { t } = useTranslation()

  const placeOrderLink = () => {
    navigate('/place-order')
  }

  return (
    <main>
      <PageHeader title={t('basket:content.title')} backLink="/" />

      <RenderPrice
        title={t('basket:content.productsQuantity', { count: quantity })}
        price={amount}
        className="h4 d-block mt-4 fw-semibold text-start" />

      <BasketProductList basketStore={basketStore} />

      <BasketPriceCalc />

      <BottomButton
        title={t('basket:content.buttons.placeOrder')}
        onClick={placeOrderLink}
      />
    </main>
  )
}

export default BasketContent

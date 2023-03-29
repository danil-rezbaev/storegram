import React, { FC } from 'react'
import RenderPrice from '../../../components/RenderPrice'
import { useAppSelector } from '../../../hooks/redux'
import { useTranslation } from 'react-i18next'

export type BasketAmountProps = unknown

const BasketPriceCalc: FC<BasketAmountProps> = () => {
  const totalPrice = useAppSelector(state => state.basket.amount)

  const { t } = useTranslation()

  return (
    <ul className="basket-price-calc">
      <li className="list-item">
        <span>{t('basket:content.totalPrice.title')}</span>
        <RenderPrice price={totalPrice}/>
      </li>
    </ul>
  )
}

export default BasketPriceCalc

import React, { FC, useEffect, useMemo } from 'react'
import RenderPrice from '../../../components/RenderPrice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { updateTotalPrice } from '../../../store/globalSlice'
import { useTranslation } from 'react-i18next'

export type BasketAmountProps = unknown

const BasketPriceCalc: FC<BasketAmountProps> = () => {
  const basketStore = useAppSelector(state => state.basket)
  const { amount, quantity } = basketStore

  const globalStore = useAppSelector(state => state.global)
  const { wayGetting, totalPrice } = globalStore

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  useEffect(() => {
    const price = wayGetting ? wayGetting.price : 0
    const calcPrice = price + amount
    dispatch(updateTotalPrice({ totalPrice: calcPrice }))
  }, [amount, wayGetting])

  const productsAmountView = useMemo(() => {
    return (
      <li className="list-item">
        <span>{t('basket:content.productsQuantity', { count: quantity })}</span>
        <RenderPrice price={amount}/>
      </li>
    )
  }, [quantity, amount])

  const wayGettingView = useMemo(() => {
    if (!wayGetting) return null

    const { type, price } = wayGetting

    return (
      <li className="list-item">
        <span>{t(`basket:content.wayGetting.${type}.title`)}</span>
        <RenderPrice price={price ?? 0}/>
      </li>
    )
  }, [wayGetting])

  const totalPriceView = useMemo(() => {
    return (
      <li className="list-item">
        <span>{t('basket:content.totalPrice.title')}</span>
        <RenderPrice price={totalPrice}/>
      </li>
    )
  }, [totalPrice])

  return (
    <ul className="basket-price-calc">
      {productsAmountView}
      {wayGettingView}
      {totalPriceView}
    </ul>
  )
}

export default BasketPriceCalc

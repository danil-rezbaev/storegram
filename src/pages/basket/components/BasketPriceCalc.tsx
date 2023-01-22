import React, { FC, useEffect, useMemo } from 'react'
import RenderPrice from '../../../components/RenderPrice'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { updateTotalPrice } from '../../../store/globalSlice'

export type BasketAmountProps = unknown

const BasketPriceCalc: FC<BasketAmountProps> = () => {
  const basketStore = useAppSelector(state => state.basket)
  const { amount, quantity } = basketStore

  const globalStore = useAppSelector(state => state.global)
  const { wayGetting, totalPrice } = globalStore

  const dispatch = useAppDispatch()

  useEffect(() => {
    const price = wayGetting?.price ?? 0
    dispatch(updateTotalPrice({ totalPrice: (price + amount) }))
  }, [amount, wayGetting])

  const productsAmountView = useMemo(() => {
    const titleFormat = `${quantity} товара`
    return (
      <li className="list-item">
        <span>{titleFormat}</span>
        <RenderPrice price={amount}/>
      </li>
    )
  }, [quantity, amount])

  const wayGettingView = useMemo(() => {
    if (!wayGetting) return null

    const { type, price } = wayGetting

    return (
      <li className="list-item">
        <span>{type}</span>
        <RenderPrice price={price ?? 0}/>
      </li>
    )
  }, [wayGetting])

  const totalPriceView = useMemo(() => {
    return (
      <li className="list-item">
        <span>Итого</span>
        <RenderPrice price={totalPrice}/>
      </li>
    )
  }, [wayGetting])

  return (
    <ul className="basket-price-calc">
      {productsAmountView}
      {wayGettingView}
      {totalPriceView}
    </ul>
  )
}

export default BasketPriceCalc

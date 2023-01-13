import React, { FC, useMemo } from 'react'
import cs from 'classnames'
import { useAppSelector } from '../hooks/redux'

export type RenderPriceProps = {
  price: string | number,
  className?: string
}

const RenderPrice: FC<RenderPriceProps> = (props) => {
  const {
    price,
    className
  } = props

  const currency = useAppSelector(state => state.global.currency)
  const priceFormat = useMemo(() => (
    `${price} ${currency}`
  ), [currency])

  return (
    <p className={cs('price-render m-0', className)}>
      {priceFormat}
    </p>
  )
}

export default RenderPrice

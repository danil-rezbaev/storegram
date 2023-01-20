import React, { FC, useMemo } from 'react'
import cs from 'classnames'
import { useAppSelector } from '../hooks/redux'

export type RenderPriceProps = {
  title?: string | number,
  price: string | number | undefined,
  className?: string
}

const RenderPrice: FC<RenderPriceProps> = (props) => {
  const {
    title,
    price,
    className
  } = props

  const currency = useAppSelector(state => state.global.currency)

  const priceFormat = useMemo(() => {
    const priceFormat = price ?? 0
    const titleFormat = title || ''
    return `${titleFormat} ${priceFormat} ${currency}`
  }, [price, currency])

  return (
    <p className={cs('price-render m-0', className)}>
      {priceFormat}
    </p>
  )
}

export default RenderPrice

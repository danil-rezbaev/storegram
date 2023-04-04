import React, { FC, useMemo } from 'react'
import cs from 'classnames'
import { useAppSelector } from '../hooks/redux'

export type RenderPriceProps = {
  title?: string | number | null,
  price?: string | number,
  className?: string
}

const RenderPrice: FC<RenderPriceProps> = (props) => {
  const {
    title,
    price,
    className
  } = props

  const { currency } = useAppSelector(state => state.global)

  const priceFormat = useMemo(() => {
    const priceFormat = price ?? 0
    const titleFormat = title || ''
    return `${titleFormat} ${priceFormat} ${currency}`
  }, [price, currency])

  return (
    <p className={cs('price-render', className)}>
      {priceFormat}
    </p>
  )
}

export default RenderPrice

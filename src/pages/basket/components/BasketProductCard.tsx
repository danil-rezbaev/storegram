import React, { FC } from 'react'
import { ProductItemStore } from '../../../layout/types/catalog/productsDataTypes'

export type BasketProductCardProps = ProductItemStore

const BasketProductCard: FC<BasketProductCardProps> = (props) => {
  const {
    img,
    title,
    description,
    price
  } = props

  return (
    <div
      className="basket-product-item">
      <div className="basket-product-card--body">
        <div>
          <img src={img} alt="" className="basket-product-card--img"/>
        </div>

        <div className="basket-product-card--content">
          <b className="basket-product-card--title">{title}</b>
          <p className="basket-product-card--description">{description}</p>
        </div>
      </div>

      <div className="basket-product-card--footer">
        <p className="basket-product-card--price">{price }</p>
      </div>
    </div>
  )
}

export default BasketProductCard

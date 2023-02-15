import React, { FC, MouseEventHandler, useCallback } from 'react'
import { ProductItemStore } from '../../../layout/types/catalog/productsDataTypes'
import BasketProductOptions from './BasketProductOptions'
import Counter from '../../../components/Counter'
import { useAppDispatch } from '../../../hooks/redux'
import { addProduct, removeProduct } from '../../../store/basketSlice'
import RenderPrice from '../../../components/RenderPrice'
import CropText from '../../../components/CropText'
import { useTranslation } from 'react-i18next'

export type BasketProductCardProps = ProductItemStore

const BasketProductCard: FC<BasketProductCardProps> = (props) => {
  const {
    id,
    uniqueId,
    img,
    title,
    description,
    totalPrice,
    count,
    currentOptions
  } = props

  const { t } = useTranslation()

  const dispatch = useAppDispatch()

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const getName = event.currentTarget.name

    if (getName === 'increment') {
      dispatch(addProduct({ ...props, count: 1 }))
    } else if (getName === 'decrement') {
      dispatch(removeProduct({ id, uniqueId }))
    }
  }, [count])

  return (
    <div className="basket-product-card">
      <div className="basket-product-card--body">
        <div className="basket-product-card--img-container">
          <img src={img[0]} alt="" className="basket-product-card--img"/>
        </div>

        <div className="basket-product-card--content">
          <b className="basket-product-card--title">{title}</b>
          <CropText title={description} number={135} className="basket-product-card--description" />

          <BasketProductOptions currentOptions={currentOptions} />
        </div>
      </div>

      <div className="basket-product-card--footer">
        <RenderPrice price={totalPrice} className="basket-product-card--price" />
        <Counter
          title={t('counter:pieces', { count })}
          handler={handleClick}
          className='basket-product-card--counter' />
      </div>
    </div>
  )
}

export default BasketProductCard

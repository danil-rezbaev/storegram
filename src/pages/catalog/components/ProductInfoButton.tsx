import React, { FC, MouseEventHandler, useCallback, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addProduct, removeProduct } from '../../../store/basketSlice'
import BottomButton from '../../../components/BottomButton'

export type ProductInfoButtonProps = unknown

const ProductInfoButton: FC<ProductInfoButtonProps> = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state)
  const productInfoStore = store.productInfo.product
  const basketStore = store.basket

  const {
    products,
    totalProductProperties
  } = basketStore

  const {
    id,
    price
  } = productInfoStore

  const productPropertiesMemo = useMemo(() => {
    if (totalProductProperties[id]) {
      return totalProductProperties[id]
    }
    return undefined
  }, [totalProductProperties])

  const priceMemo = productPropertiesMemo?.price || price
  const uniqueIdMemo = productPropertiesMemo?.uniqueId
  const currency = useAppSelector(state => state.global.currency)

  const countProducts = useMemo(() => {
    if (uniqueIdMemo && products[uniqueIdMemo]) {
      return products[uniqueIdMemo].count
    } else {
      return 0
    }
  }, [id, uniqueIdMemo, products])

  const productBasketHandler: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name

    if (targetName === 'increment') {
      dispatch(addProduct({ ...productInfoStore }))
    } else if (targetName === 'decrement') {
      dispatch(removeProduct({ id }))
    }
  }, [productInfoStore])

  const titleFormat = useMemo(() => {
    if (countProducts > 0) {
      return `${countProducts} x ${priceMemo} ${currency}`
    } else {
      return `в корзину за ${priceMemo} ${currency}`
    }
  }, [countProducts, priceMemo])

  return (
    <div className="product-info-button">
      <BottomButton
        onClick={productBasketHandler}
        title={titleFormat}
        name="increment"
      >
        {countProducts > 0
          ? (
          <div className="counter-control">
            <button
              className="counter-control--btn"
              name="decrement"
              onClick={productBasketHandler}
            >
              -
            </button>

            <button
              className="counter-control--btn"
              name="increment"
              onClick={productBasketHandler}
            >
              +
            </button>
          </div>
            )
          : null}
      </BottomButton>
    </div>

  )
}

export default ProductInfoButton

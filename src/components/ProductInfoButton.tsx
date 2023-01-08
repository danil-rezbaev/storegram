import React, { FC, useCallback, useMemo } from 'react'
import BottomButton from './BottomButton'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { addProduct, removeProduct } from '../store/basketSlice'

export type ProductInfoButtonProps = unknown

const ProductInfoButton: FC<ProductInfoButtonProps> = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state)
  const productInfoStore = store.productInfoSlice.product
  const optionsStore = store.optionsQuizSlice
  const basketStore = store.basket

  const {
    id,
    price
  } = productInfoStore

  const { selectedOptions, productId } = optionsStore

  const selectedOptionsMemo = useMemo(() => selectedOptions ? selectedOptions[id] : undefined, [selectedOptions])

  const productsPropertiesMemo = useMemo(() => {
    if (basketStore.productsProperties[id]) {
      return { count: basketStore.productsProperties[id].count, totalPrice: basketStore.productsProperties[id].totalPrice }
    } else {
      return { count: 0, totalPrice: 0 }
    }
  }, [basketStore])

  console.log('productsPropertiesMemo.count', productsPropertiesMemo.count)

  const addProductInBasket = useCallback(() => {
    const currentOptionsFormat = id === productId ? selectedOptionsMemo : {}
    dispatch(addProduct({ ...productInfoStore, currentOptions: currentOptionsFormat }))
  }, [selectedOptionsMemo, productInfoStore])

  const removeProductFromBasket = useCallback(() => {
    dispatch(removeProduct({ id }))
  }, [selectedOptionsMemo, productInfoStore])

  const titleFormat = useMemo(() => {
    if (productsPropertiesMemo.count > 0) {
      return `${productsPropertiesMemo.count} x ${price} р`
    } else {
      return `в корзину за ${price} р`
    }
  }, [productsPropertiesMemo.count])

  return (
    <div className="product-info-button">
      <BottomButton
        onClick={addProductInBasket}
        title={titleFormat}
      >
        {productsPropertiesMemo.count > 0
          ? (
          <div className="counter-control">
            <button
              className="counter-control--btn"
              name="decrement"
              onClick={removeProductFromBasket}
            >
              -
            </button>

            <button
              className="counter-control--btn"
              name="increment"
              onClick={addProductInBasket}
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

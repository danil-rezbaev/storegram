import React, { FC, MouseEventHandler, useCallback, useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addProduct, removeProduct, updateUniqueId } from '../../../store/basketSlice'
import BottomButton from '../../../components/BottomButton'
import _ from 'lodash'
import { updatePrice } from '../../../store/productInfoSlice'

export type ProductInfoButtonProps = unknown

const ProductInfoButton: FC<ProductInfoButtonProps> = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state)
  const productInfoStore = store.productInfo.product
  const optionsQuizStore = store.optionsQuiz
  const basketStore = store.basket

  const {
    products,
    uniqueId
  } = basketStore

  const {
    id,
    price
  } = productInfoStore

  const { selectedOptions, productId } = optionsQuizStore
  const selectedOptionsMemo = useMemo(() => selectedOptions ? selectedOptions[id] : undefined, [selectedOptions])
  const priceMemo = useMemo(() => {
    return price
  }, [price])

  const countProducts = useMemo(() => {
    if (products[uniqueId]) {
      return products[uniqueId].count
    } else {
      return 0
    }
  }, [selectedOptions, uniqueId, products])

  const productBasketHandler: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name

    if (targetName === 'increment') {
      const currentOptionsFormat = id === productId ? selectedOptionsMemo : {}
      dispatch(addProduct({ ...productInfoStore, currentOptions: currentOptionsFormat }))
    } else if (targetName === 'decrement') {
      dispatch(removeProduct({ id }))
    }
  }, [selectedOptionsMemo, productInfoStore])

  const titleFormat = useMemo(() => {
    if (countProducts > 0) {
      return `${countProducts} x ${priceMemo} р`
    } else {
      return `в корзину за ${priceMemo} р`
    }
  }, [countProducts, priceMemo])

  useEffect(() => {
    if (selectedOptionsMemo) {
      const totalPriceChange = _.reduce(_.values(selectedOptionsMemo), (accum, values) => {
        return accum += _.reduce(values, (accum1, item) => accum1 += item.priceChange, 0)
      }, 0)

      dispatch(updateUniqueId({ id, currentOptions: selectedOptionsMemo }))
      dispatch(updatePrice({ priceChange: totalPriceChange }))
    }
  }, [selectedOptionsMemo])

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

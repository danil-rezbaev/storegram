import React, { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addProduct } from '../../../store/basketSlice'
import { useTranslation } from 'react-i18next'
import Counter from '../../../components/Counter'
import { Button } from 'react-bootstrap'
import { CurrentOptions } from '../../../layout/types/catalog/productsDataTypes'
// import _ from 'lodash'
// import generateUniqueId from '../../../tools/GenerateUniqueId'
// import { visibleHandle } from '../../../store/productInfoSlice'

export type ProductInfoControlProps = {
  options?: CurrentOptions,
}

const ProductInfoControl: FC<ProductInfoControlProps> = (props) => {
  const {
    options = []
  } = props

  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state)
  const productInfoStore = store.productInfo.product
  const basketStore = store.basket

  const {
    // products,
    totalProductProperties
  } = basketStore

  const {
    id,
    price
  } = productInfoStore

  const { t } = useTranslation()

  const productPropertiesMemo = useMemo(() => totalProductProperties[id], [totalProductProperties])

  const priceMemo = productPropertiesMemo?.price || price
  // const uniqueIdMemo = productPropertiesMemo?.uniqueId
  const currency = useAppSelector(state => state.global.currency)

  // const storeCountProducts = useMemo(() => {
  //   if (uniqueIdMemo && products[uniqueIdMemo]) {
  //     return products[uniqueIdMemo].count > 0 ? products[uniqueIdMemo].count : 0
  //   }
  //   return 0
  // }, [id, uniqueIdMemo, products])

  const [counter, setCounter] = useState<number>(1)

  const counterHandler: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name

    if (targetName === 'increment') {
      setCounter(value => value + 1)
    } else if (targetName === 'decrement') {
      if (counter > 1) {
        setCounter(value => value - 1)
      }
    }
  }, [productInfoStore, counter, options])

  const submitHandler = useCallback(() => {
    if (counter === 1) {
      dispatch(addProduct(productInfoStore))
    }
    // dispatch(addProduct({ ...productInfoStore, currentOptions: options }))
    // dispatch(removeProduct({ id, uniqueId: generateUniqueId(id, options) }))

    // if (storeCountProducts === 0) {
    //   dispatch(addProduct({ ...productInfoStore, count: counter }))
    // }

    // dispatch(visibleHandle({ value: false }))
  }, [counter])

  const titleFormat = useMemo(() => {
    const priceFormat = `${priceMemo} ${currency}`

    return t('catalog:productInfoControl.addProduct', { price: priceFormat })
  }, [priceMemo])

  return (
    <div className="product-info-control bottom-button">
      <Counter title={counter} size="lg" handler={counterHandler} />

      <Button
        size="lg"
        variant="success"
        className="product-info-control--submit text-white"
        onClick={submitHandler}
      >
        { titleFormat }
      </Button>
    </div>
  )
}

export default ProductInfoControl

import React, { FC, MouseEventHandler, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useTranslation } from 'react-i18next'
import Counter from '../../../components/Counter'
import { Button } from 'react-bootstrap'
import { CurrentOptions } from '../../../layout/types/catalog/productsDataTypes'
import { addProduct } from '../../../store/basketSlice'
import { visibleHandle } from '../../../store/productInfoSlice'
import _ from 'lodash'

export type ProductInfoControlProps = {
  options?: CurrentOptions,
}

const ProductInfoControl: FC<ProductInfoControlProps> = (props) => {
  const {
    options = {}
  } = props

  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state)
  const productInfoStore = store.productInfo.product
  const basketStore = store.basket
  const currency = store.global.currency

  const {
    totalProductProperties
  } = basketStore

  const {
    id,
    price
  } = productInfoStore

  const { t } = useTranslation()

  const productPropertiesMemo = useMemo(() => totalProductProperties[id], [totalProductProperties])
  const priceMemo = productPropertiesMemo?.price || price
  const countMemo = _.keys(options).length === 0 ? productPropertiesMemo?.count : 1
  const countFormat = countMemo ?? 1

  console.log('_.keys(options).length', _.keys(options).length)

  const [counter, setCounter] = useState<number>(countFormat)

  const counterHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    const targetName = event.currentTarget.name

    if (targetName === 'increment') {
      setCounter(value => value + 1)
    } else if (targetName === 'decrement' && counter > 1) {
      setCounter(value => value - 1)
    }
  }

  useEffect(() => {
    console.log('countMemo', countMemo)
  }, [])

  const submitHandler = () => {
    dispatch(addProduct({ ...productInfoStore, currentOptions: options, count: counter }))
    dispatch(visibleHandle({ value: false }))
    setCounter(1)
  }

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

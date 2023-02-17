import React, { FC, MouseEventHandler, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { useTranslation } from 'react-i18next'
import Counter from '../../../components/Counter'
import { Button } from 'react-bootstrap'
import { CurrentOptions } from '../../../layout/types/catalog/productsDataTypes'
import { addProduct } from '../../../store/basketSlice'
import { visibleHandle } from '../../../store/productInfoSlice'
import _ from 'lodash'
import cs from 'classnames'

export type ProductInfoControlProps = {
  selectedOptions?: CurrentOptions,
  optionsExist?: boolean
}

const ProductInfoControl: FC<ProductInfoControlProps> = (props) => {
  const {
    selectedOptions = {},
    optionsExist = false
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
    price,
    options
  } = productInfoStore

  const { t } = useTranslation()

  const productPropertiesMemo = useMemo(() => totalProductProperties[id], [totalProductProperties])

  const [counter, setCounter] = useState<number>(1)

  useEffect(() => {
    const optionsLength = _.keys(options).length === 0
    const countFormat = optionsLength ? productPropertiesMemo?.count : 1

    if (countFormat) {
      setCounter(countFormat)
    }
  }, [options])

  const totalPriceChange = useMemo(() => {
    const calc = _.reduce(_.values(selectedOptions), (accum, item) => {
      item.values.forEach(value => {
        accum += value.priceChange
      })
      return accum
    }, 0)

    return price + calc
  }, [selectedOptions])

  const counterHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    const targetName = event.currentTarget.name

    if (targetName === 'increment') {
      setCounter(value => value + 1)
    } else if (targetName === 'decrement' && counter > 1) {
      setCounter(value => value - 1)
    }
  }

  const submitHandler = () => {
    dispatch(addProduct({ ...productInfoStore, price: totalPriceChange, currentOptions: selectedOptions, count: counter }))
    dispatch(visibleHandle({ value: false }))
    setCounter(1)
  }

  const titleFormat = useMemo(() => {
    const priceFormat = `${totalPriceChange} ${currency}`

    return t('catalog:productInfoControl.addProduct', { price: priceFormat })
  }, [totalPriceChange])

  return (
    <div className={cs('product-info-control', optionsExist ? 'bottom-button' : 'mt-3')}>
      <Counter title={counter} size="lg" handler={counterHandler} />

      <Button
        size="lg"
        variant="primary"
        className="product-info-control--submit text-white"
        onClick={submitHandler}
      >
        { titleFormat }
      </Button>
    </div>
  )
}

export default ProductInfoControl

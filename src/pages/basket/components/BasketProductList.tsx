import React, { FC, useMemo } from 'react'
import BasketProductCard from './BasketProductCard'
import _ from 'lodash'
import { BasketState } from '../../../store/basketSlice'

export type BasketProductListProps = {
  basketStore: BasketState
}

const BasketProductList: FC<BasketProductListProps> = (props) => {
  const {
    basketStore
  } = props

  const basketProducts = basketStore.products
  const basketProductsMemo = useMemo(() => _.values(basketProducts), [basketProducts])
  const basketProductsValid = _.filter(basketProductsMemo, (item) => item.count > 0)

  return (
    <div className="basket-product-list">
       { basketProductsValid.map((item) => (
         <BasketProductCard
           key={item.uniqueId}
           {...item}
         />
       ))}
    </div>
  )
}

export default BasketProductList

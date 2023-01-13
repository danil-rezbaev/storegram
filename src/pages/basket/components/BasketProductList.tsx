import React, { FC, useMemo } from 'react'
import BasketProductCard from './BasketProductCard'
import { useAppSelector } from '../../../hooks/redux'
import _ from 'lodash'

export type BasketProductListProps = unknown

const BasketProductList: FC<BasketProductListProps> = () => {
  const basketProducts = useAppSelector(state => state.basket.products)
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

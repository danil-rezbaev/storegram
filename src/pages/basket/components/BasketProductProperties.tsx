import React, { FC, useMemo } from 'react'
import { ProductItemPropertiesValue } from '../../../layout/types/catalog/productsDataTypes'
import _ from 'lodash'

export type BasketProductPropertiesProps = {
  currentProperties: Record<string, ProductItemPropertiesValue[]>
}

const BasketProductProperties: FC<BasketProductPropertiesProps> = (props) => {
  const {
    currentProperties
  } = props

  const propertiesMemo = useMemo(() => {
    return _.entries(currentProperties).map(([key, value]) => (
      [key, _.values(value).map((item) => item.title).join(', ')]
    ))
  }, [currentProperties])

  return (
    <ul className="basket-product-properties">
      {propertiesMemo.map(([title, values]) => (
        <li key={title} className="properties--item">
          <b>{title}</b>: {values}
        </li>
      ))}
    </ul>
  )
}

export default BasketProductProperties

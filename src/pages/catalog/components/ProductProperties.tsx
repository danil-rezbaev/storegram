import React, { FC, useMemo } from 'react'
import { ProductItemProperties } from '../../../layout/types/catalog/productsDataTypes'

export type ProductPropertiesProps = {
  data: ProductItemProperties
}

const ProductProperties: FC<ProductPropertiesProps> = (props) => {
  const {
    title,
    description,
    table
  } = props.data

  const tableView = useMemo(() => {
    if (table) {
      return (
        <ul className="product-properties--table">
          {table.map((item) => (
            <li
              key={item.title + item.value}
              className="table--item"
            >
              <span>{item.title}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      )
    }
    return null
  }, [table])

  return (
    <div className="product-properties">
      <h6 className="product-properties--title">{title}</h6>

      {description
        ? <p className="product-properties--description">{description}</p>
        : null
      }

      {tableView}
    </div>
  )
}

export default ProductProperties

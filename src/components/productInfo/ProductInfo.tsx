import React, { FC, useState } from 'react'
import BottomPopup from '../bottomPopup/BottomPopup'
import { ProductCardProps } from '../../pages/catalog/components/ProductCard'
import { Button, ButtonGroup } from 'react-bootstrap'

export type ProductInfoProperties = {
  id: number,
  title: string,
  values: string[]
}

export type ProductInfoProps = ProductCardProps & {
  properties?: ProductInfoProperties[]
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const {
    img,
    title,
    description,
    properties
  } = props

  const [visible, setVisible] = useState<boolean>(true)

  const handleClose = () => setVisible(false)
  // const handleShow = () => setShow(true)

  return (
    <BottomPopup
      visible={visible}
      className="product-info"
    >
      <Button onClick={handleClose}>+</Button>

      <div className="product-info--img-container">
        <img src={img} alt="" className="product-info--img"/>
      </div>

      <div className="product-info--content">
        <div className="product-info--header">
          <h1 className="product-info--title">{title}</h1>
        </div>

        <p className="product-info--header">{description}</p>

        {properties?.map((item) => (
          <div
            key={item.id}
            className="product-info--options"
          >
            <p>{item.title}</p>
            <ButtonGroup className="mb-2">
              {item.values.map((value, index) => <Button key={index}>{ value }</Button>)}
            </ButtonGroup>
          </div>
        ))}
      </div>
    </BottomPopup>
  )
}

export default ProductInfo

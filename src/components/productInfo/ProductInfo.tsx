import React, { FC } from 'react'
import BottomPopup from '../bottomPopup/BottomPopup'
import { ProductCardProps } from '../../pages/catalog/components/ProductCard'
import { Button, ButtonGroup } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../../assets/images/pages/catalog/close.svg'

export type ProductInfoProperties = {
  id: number,
  title: string,
  values: string[],
}

export type ProductInfoProps = ProductCardProps & {
  properties?: ProductInfoProperties[]
  show: boolean,
  showHandle: (value: boolean) => void,
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const {
    img,
    title,
    description,
    properties,
    show,
    showHandle
  } = props

  const handleClose = () => showHandle(false)

  return (
    <BottomPopup
      title={title}
      visible={show}
      visibleHandle={showHandle}
      className="product-info"
    >
      <Button
        className="product-info--close-btn bg-white text-black border-0"
        onClick={handleClose}>
        <CloseIcon/>
      </Button>

      <div className="product-info--img-container">
        <img src={img} alt="" className="product-info--img"/>
      </div>

      <div className="product-info--content">
        <div className="product-info--header">
          <h1 className="product-info--title">{title}</h1>
        </div>

        <p className="product-info--description">{description}</p>

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

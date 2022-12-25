import React, { FC } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../../assets/images/pages/catalog/close.svg'
import { ReactComponent as InfoIcon } from '../../assets/images/pages/catalog/info.svg'
import BottomPopup from '../../components/bottomPopup/BottomPopup'
import SelectPropertyItem from '../../components/selectProperty/SelectPropertyItem'
import { ProductItem } from '../../layout/types/catalog/productsDataTypes'

export type ProductInfoProps = ProductItem & {
  show: boolean,
  showHandle: (value: boolean) => void,
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const {
    id,
    img,
    info,
    title,
    description,
    properties,
    // price,
    show,
    showHandle
  } = props

  const handleClose = () => showHandle(false)

  const renderTooltip = (props: Record<string, any>) => (
    <Tooltip id="tooltip" {...props}>
      { info }
    </Tooltip>
  )

  return (
    <BottomPopup
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

          {info
            ? (
            <OverlayTrigger placement="left" overlay={renderTooltip}>
              <InfoIcon/>
            </OverlayTrigger>
              )
            : null}
        </div>

        <p className="product-info--description">{description}</p>

        {properties?.map((item) => (
          <SelectPropertyItem
            key={item.id}
            id={item.id}
            productId={id}
            type={item.type}
            title={item.title}
            properties={item.values}
          />
        ))}
      </div>
    </BottomPopup>
  )
}

export default ProductInfo

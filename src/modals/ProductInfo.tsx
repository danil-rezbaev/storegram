import React, { FC, useCallback } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import { ReactComponent as InfoIcon } from '../assets/images/pages/catalog/info.svg'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import SelectPropertyItem from '../components/selectProperty/SelectPropertyItem'
import BottomButton from '../components/BottomButton'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { visibleHandle } from '../store/productInfoSlice'

export type ProductInfoProps = unknown

const ProductInfo: FC<ProductInfoProps> = () => {
  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state.productInfoSlice)
  const productInfo = store.product

  const {
    visible
  } = store

  const {
    id,
    img,
    info,
    title,
    description,
    options,
    price
  } = productInfo

  const handleClose = () => visibleHandler(false)

  const visibleHandler = useCallback((value: boolean): void => {
    dispatch(visibleHandle({ value }))
  }, [])

  const renderTooltip = (props: Record<string, any>) => (
    <Tooltip id="tooltip" {...props}>
      { info }
    </Tooltip>
  )

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
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

          { info
            ? (
            <OverlayTrigger placement="left" overlay={renderTooltip}>
              <InfoIcon/>
            </OverlayTrigger>)
            : null}
        </div>

        <p className="product-info--description">{description}</p>

        {options?.map((item) => (
          <SelectPropertyItem
            key={item.id}
            id={item.id}
            productId={id}
            type={item.type}
            title={item.title}
            options={item.values}
          />
        ))}
      </div>

      <BottomButton>
        Добавить в корзину за {price} р
      </BottomButton>
    </BottomPopup>
  )
}

export default ProductInfo
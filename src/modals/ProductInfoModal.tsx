import React, { FC, useCallback, useMemo } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import { ReactComponent as InfoIcon } from '../assets/images/pages/catalog/info.svg'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import SelectPropertyItem from '../components/selectProperty/SelectPropertyItem'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { visibleHandle } from '../store/productInfoSlice'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import ProductInfoButton from '../pages/catalog/components/ProductInfoButton'
import ProductProperties from '../pages/catalog/components/ProductProperties'
import { useTranslation } from 'react-i18next'

export type ProductInfoProps = unknown

const ProductInfoModal: FC<ProductInfoProps> = () => {
  const dispatch = useAppDispatch()
  const productInfoStore = useAppSelector(state => state.productInfo)
  const product = productInfoStore.product

  const {
    visible
  } = productInfoStore

  const {
    id,
    img,
    title,
    description,
    properties,
    options
  } = product

  const { t } = useTranslation()
  const handleClose = () => visibleHandler(false)

  const visibleHandler = useCallback((value: boolean): void => {
    dispatch(visibleHandle({ value }))
  }, [])

  const renderTooltip = useMemo(() => {
    return (
      <Tooltip className="tooltip">
        {properties
          ? <ProductProperties data={properties} />
          : <p>{t('catalog:productInfoModal.propertiesNotFound')}</p>}
      </Tooltip>
    )
  }, [properties])

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
      className="modal product-info"
    >
      <Button
        className="modal--close-btn bg-white text-black border-0"
        onClick={handleClose}>
        <CloseIcon/>
      </Button>

      <div className="product-info--img-container">
        <Swiper
          spaceBetween={2.5}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {img.map((item, index) => (
            <SwiperSlide
              key={index}
            >
              <img src={item} alt="" className="product-info--img"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="product-info--content">
        <div className="product-info--header">
          <h1 className="product-info--title">{title}</h1>

          { properties
            ? (<OverlayTrigger placement="left" overlay={renderTooltip}>
              <InfoIcon/>
            </OverlayTrigger>)
            : null}
        </div>

        <p className="product-info--description">{description}</p>

        {options?.map((item, index) => (
          <SelectPropertyItem
            key={item.id}
            {...item}
            index={index}
            length={options.length}
            productId={id}
            optionsArray={options}
          />
        ))}
      </div>

      <ProductInfoButton/>
    </BottomPopup>
  )
}

export default ProductInfoModal

import React, { FC, useCallback, useState } from 'react'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import SelectOptionsContainer from '../components/selectOptions/SelectOptionsContainer'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { visibleHandle } from '../store/productInfo/productInfoSlice'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/pagination'
import 'swiper/css'
import ProductInfoControl from '../pages/catalog/components/ProductInfoControl'
import { ProductCurrentOptions } from '../layout/types/catalog/productsDataTypes'
import Image from '../components/Image/Image'
import { ReactComponent as InfoIcon } from '../assets/images/pages/catalog/info.svg'

export type ProductInfoProps = unknown

const ProductInfoModal: FC<ProductInfoProps> = () => {
  const dispatch = useAppDispatch()
  const productInfoStore = useAppSelector(state => state.productInfo)

  const {
    visible,
    product
  } = productInfoStore

  const {
    _id,
    images,
    title,
    description,
    options,
    hint
    // properties,
  } = product

  const handleClose = () => visibleHandler(false)

  const [productOptions, setProductOptions] = useState<ProductCurrentOptions>({})

  const productOptionsHandler = useCallback((options: Omit<ProductCurrentOptions, 'count'>) => {
    setProductOptions((value) => ({
      ...value,
      [_id]: { ...options.values }
    }))
  }, [_id, title])

  const visibleHandler = (value: boolean): void => {
    dispatch(visibleHandle({ value }))
  }

  const renderHint = (
    <Tooltip className="tooltip">
      { hint }
    </Tooltip>
  )

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
      className="modal product-info"
    >
       <Button
        className="modal--close-btn bg-white text-black border-0"
        variant="light"
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
          {images?.map((item, index) => (
            <SwiperSlide
              key={index}
            >
              <Image image={images.length ? images[0] : undefined} className="product-info--img"/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="product-info--content">
        <div className="product-info--header">
          <h1 className="product-info--title">{title}</h1>

           { hint
             ? <OverlayTrigger placement="left" overlay={renderHint}>
                <InfoIcon />
              </OverlayTrigger>
             : null }
        </div>

        <p className="product-info--description">{description}</p>

         { options
           ? <SelectOptionsContainer
              optionsArray={options}
              optionsHandler={productOptionsHandler}
            />
           : null }
      </div>

       <ProductInfoControl
          selectedOptions={productOptions[_id]}
          optionsExist={!!options}
       />
    </BottomPopup>
  )
}

export default ProductInfoModal

import React, { FC } from 'react'
import { ProductCardProps } from '../../pages/catalog/components/ProductCard'
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { ReactComponent as CloseIcon } from '../../assets/images/pages/catalog/close.svg'
import { ReactComponent as InfoIcon } from '../../assets/images/pages/catalog/info.svg'
import BottomPopup from '../../components/bottomPopup/BottomPopup'
import SelectPropertyItem from '../../components/selectProperty/SelectPropertyItem'

export type ProductInfoProps = ProductCardProps & {
  show: boolean,
  showHandle: (value: boolean) => void,
}

const ProductInfo: FC<ProductInfoProps> = (props) => {
  const {
    img,
    title,
    description,
    properties,
    // price,
    show,
    showHandle
  } = props

  // const [tooltipVisible, setTooltipVisible] = useState(false)
  // const target = useRef(null)

  // const tooltipVisibleToggler = useCallback(() => {
  //   setTooltipVisible(value => !value)
  // }, [])

  const handleClose = () => showHandle(false)

  const renderTooltip = () => (
    <Tooltip className="button-tooltip" style={{ zIndex: 10000000 }}>
      Simple tooltip
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

          <OverlayTrigger
            placement="left-end"
            overlay={renderTooltip}
          >
            <InfoIcon/>
          </OverlayTrigger>
        </div>

        <p className="product-info--description">{description}</p>

        {properties?.map((item) => (
          <SelectPropertyItem
            key={item.id}
            title={item.title}
            properties={item.values}
          />
        ))}
      </div>
    </BottomPopup>
  )
}

export default ProductInfo

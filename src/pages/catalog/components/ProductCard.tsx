import React, { FC, MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addProduct, removeProduct } from '../../../store/basketSlice'
import ProductInfo from '../../../modals/ProductInfo/ProductInfo'
import { ProductItem } from '../../../layout/types/catalog/productsDataTypes'

export type ProductCardProps = ProductItem

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    img,
    title,
    description,
    weight,
    price
  } = props

  const dispatch = useAppDispatch()
  const basket = useAppSelector(state => state.basket)
  const currentElement = basket.products.find((item) => {
    return item.title === title
  })

  const currentElementCount = currentElement?.count ? currentElement.count : 0
  const cardRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState<boolean>(false)
  const [infoVisible, setInfoVisible] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(currentElementCount)
  const [totalPrice, setTotalPrice] = useState<number>(price)

  const infoVisibleHandle = useCallback((value: boolean): void => {
    setInfoVisible(value)
  }, [])

  useEffect(() => {
    setTotalPrice(quantity * price)
  }, [quantity])

  const activeAnimation = useCallback(() => {
    setActive(true)
    setTimeout(() => setActive(false), 250)
  }, [])

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const getName = event.currentTarget.name

    setInfoVisible(true)

    if (getName === 'increment') {
      setQuantity(value => ++value)
      dispatch(addProduct({ ...props, count: quantity + 1 }))
    } else if (getName === 'decrement') {
      setQuantity(value => --value)
      dispatch(removeProduct({ ...props, count: quantity - 1 }))
    }

    activeAnimation()
  }, [quantity])

  return (
    <div className={cs('product-card', { active })} ref={cardRef}>
      <div className="product-card--img">
        <img src={img} alt=""/>
      </div>

      <div className="product-card--info">
        <div className="product-card--info-container">
          <h3 className="product-card--title">{title}</h3>
          <div className="product-card--properties">
            { weight
              ? <p className="product-card--weight">{weight} г</p>
              : null }
            { description
              ? <p className="product-card--description">{description}</p>
              : null }
          </div>
        </div>

        <div className="product-card--button-container">
          { quantity > 0
            ? (
                <>
                  <div className="product-card-control">
                    <Button
                      variant="secondary"
                      className="product-card-control--button"
                      name="decrement"
                      onClick={handleClick}
                    >
                      -
                    </Button>

                    <p className="product-card-control--title"> {totalPrice} ₽</p>

                    <Button
                      variant="secondary"
                      className="product-card-control--button"
                      name="increment"
                      onClick={handleClick}
                    >
                      +
                    </Button>
                  </div>

                  <div className="product-card--quantity-hint">{quantity}</div>
                </>
              )
            : (
                <Button
                  variant="secondary"
                  className="product-card--button w-100"
                  name="increment"
                  onClick={handleClick}
                >
                  {price} ₽
                </Button>
              ) }
        </div>
      </div>

      <ProductInfo
        {...props}
        show={infoVisible}
        showHandle={infoVisibleHandle}
      />
    </div>
  )
}

export default ProductCard

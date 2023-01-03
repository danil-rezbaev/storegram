import React, { FC, MouseEventHandler, useCallback, useEffect, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addProduct, removeProduct } from '../../../store/basketSlice'
import { ProductItem } from '../../../layout/types/catalog/productsDataTypes'
import Counter from '../../../components/Counter'
import { openModal } from '../../../store/productInfoSlice'
import _ from 'lodash'

export type ProductCardProps = ProductItem

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    id,
    img,
    title,
    price,
    options
  } = props

  const dispatch = useAppDispatch()
  const store = useAppSelector(state => state)
  const basket = store.basket

  const currentElement = basket.products[id]
  const currentElementCount = currentElement?.count ? currentElement.count : 0

  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<boolean>(false)
  const [quantity, setQuantity] = useState<number>(currentElementCount)
  const [totalPrice, setTotalPrice] = useState<number>(price)

  useEffect(() => {
    setTotalPrice(quantity * price)
  }, [quantity])

  const activeAnimation = useCallback(() => {
    setActive(true)
    setTimeout(() => setActive(false), 250)
  }, [])

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const getName = event.currentTarget.name
    const newObject = { ...props, count: quantity, totalPrice, currentOptions: {} }

    if (getName === 'increment') {
      setQuantity(value => ++value)
      dispatch(addProduct({ ...props, count: quantity + 1, totalPrice, currentOptions: {} }))
    } else if (getName === 'decrement') {
      setQuantity(value => --value)
      dispatch(removeProduct({ ...props, count: quantity - 1, totalPrice, currentOptions: {} }))
    }

    if ((options && typeof currentElement === 'undefined') ||
      (options && (options?.length !== _.keys((currentElement?.currentOptions))?.length))) {
      dispatch(openModal(newObject))
    }

    activeAnimation()
  }, [quantity, currentElement])

  const cardClick: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    const newObject = { ...props, count: quantity, totalPrice, currentOptions: {} }
    dispatch(openModal(newObject))
  }, [quantity])

  return (
    <div
      className={cs('product-card', { active })}
      ref={cardRef}
    >
      <div className="product-card--img" onClick={cardClick}>
        <img src={img[0]} alt=""/>
      </div>

      <div className="product-card--info">
        <div className="product-card--info-container" onClick={cardClick}>
          <h3 className="product-card--title">{title}</h3>
        </div>

        <div className="product-card--button-container">
          { quantity > 0
            ? (
                <>
                  <Counter title={`${totalPrice} ₽`} handler={buttonClick} className='product-card-control' />
                  <div className="product-card--quantity-hint">{quantity}</div>
                </>)
            : (<Button
                  variant="secondary"
                  className="product-card--button w-100"
                  name="increment"
                  onClick={buttonClick}
                >
                  {price} ₽
                </Button>) }
        </div>
      </div>
    </div>
  )
}

export default ProductCard

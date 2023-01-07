import React, { FC, MouseEventHandler, useCallback, useRef, useState } from 'react'
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
  const basketStore = useAppSelector(state => state.basket)

  const currentElement = basketStore.products[id]
  const currentElementCount = basketStore.commonProductCounter[id]

  const cardRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState<boolean>(false)
  const [totalPrice] = useState<number>(price)

  const activeAnimation = useCallback(() => {
    setActive(true)
    setTimeout(() => setActive(false), 250)
  }, [])

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const getName = event.currentTarget.name

    if (getName === 'increment') {
      dispatch(addProduct(props))
    } else if (getName === 'decrement') {
      dispatch(removeProduct({ id }))
    }

    if ((options && typeof currentElement === 'undefined') ||
      (options && (options?.length !== _.keys((currentElement?.currentOptions))?.length))) {
      dispatch(openModal(props))
    }

    activeAnimation()
  }, [currentElementCount, currentElement])

  const cardClick: MouseEventHandler<HTMLDivElement> = useCallback(() => {
    dispatch(openModal(props))
  }, [currentElementCount])

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
          { currentElementCount > 0
            ? (
                <>
                  <Counter title={`${totalPrice} ₽`} handler={buttonClick} className='product-card-control' />
                  <div className="product-card--quantity-hint">{currentElementCount}</div>
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

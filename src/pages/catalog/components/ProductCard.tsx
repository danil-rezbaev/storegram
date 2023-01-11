import React, { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { addProduct, removeProduct } from '../../../store/basketSlice'
import { ProductItem } from '../../../layout/types/catalog/productsDataTypes'
import Counter from '../../../components/Counter'
import { openModal } from '../../../store/productInfoSlice'

export type ProductCardProps = ProductItem

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    id,
    img,
    title,
    price
  } = props

  const dispatch = useAppDispatch()
  const basketStore = useAppSelector(state => state.basket)
  const currentProduct = basketStore.totalProductProperties[id]

  const totalProductPropertiesMemo = useMemo(() => {
    if (currentProduct) {
      return { count: currentProduct.count, price: currentProduct.price, totalPrice: currentProduct.totalPrice }
    } else {
      return { count: 0, price, totalPrice: 0 }
    }
  }, [currentProduct])

  const [active, setActive] = useState<boolean>(false)

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name

    if (targetName === 'increment') {
      dispatch(addProduct(props))
    } else if (targetName === 'decrement') {
      dispatch(removeProduct({ id }))
    }

    setActive(true)
    setTimeout(() => setActive(false), 250)
  }, [])

  const openModalClick = () => dispatch(openModal(props))

  return (
    <div
      className={cs('product-card', { active })}
    >
      <div className="product-card--img" onClick={openModalClick}>
        <img src={img[0]} alt=""/>
      </div>

      <div className="product-card--info">
        <div className="product-card--info-container" onClick={openModalClick}>
          <h3 className="product-card--title">{title}</h3>
        </div>

        <div className="product-card--button-container">
          { totalProductPropertiesMemo.count > 0
            ? (
                <>
                  <Counter title={`${totalProductPropertiesMemo.totalPrice} ₽`} handler={buttonClick} className='product-card-control' />
                  <div className="product-card--quantity-hint">{totalProductPropertiesMemo.count}</div>
                </>)
            : (
              <Button
                  variant="secondary"
                  className="product-card--button w-100"
                  onClick={openModalClick}
                >
                  {totalProductPropertiesMemo.price} ₽
                </Button>
              ) }
        </div>
      </div>
    </div>
  )
}

export default ProductCard

import React, { FC, MouseEventHandler, useCallback, useState } from 'react'
import { ProductItemStore } from '../../../layout/types/catalog/productsDataTypes'
import BasketProductOptions from './BasketProductOptions'
import Counter from '../../../components/Counter'
import { useAppDispatch } from '../../../hooks/redux'
import { addProduct, removeProduct } from '../../../store/basketSlice'

export type BasketProductCardProps = ProductItemStore

const BasketProductCard: FC<BasketProductCardProps> = (props) => {
  const {
    img,
    title,
    description,
    totalPrice,
    count,
    currentOptions
  } = props

  const [quantity, setQuantity] = useState<number>(count)
  const dispatch = useAppDispatch()
  // const basket = useAppSelector(state => state.basket)
  // const currentElement = basket.products.find((item) => {
  //   return item.id === id
  // })

  const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const getName = event.currentTarget.name

    if (getName === 'increment') {
      setQuantity(value => ++value)
      dispatch(addProduct({ ...props, count: quantity + 1, currentOptions: {} }))
    } else if (getName === 'decrement') {
      setQuantity(value => --value)
      dispatch(removeProduct({ ...props, count: quantity - 1, currentOptions: {} }))
    }
  }, [quantity])

  return (
    <div className="basket-product-card">
      <div className="basket-product-card--body">
        <div className="basket-product-card--img-container">
          <img src={img} alt="" className="basket-product-card--img"/>
        </div>

        <div className="basket-product-card--content">
          <b className="basket-product-card--title">{title}</b>
          <p className="basket-product-card--description">{description}</p>

          <BasketProductOptions currentOptions={currentOptions} />
        </div>
      </div>

      <div className="basket-product-card--footer">
        <p className="basket-product-card--price">{totalPrice} Р</p>
        <Counter title={`${count} шт`} handler={handleClick} className='basket-product-card--counter' />
      </div>
    </div>
  )
}

export default BasketProductCard

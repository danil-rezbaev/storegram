import React, { FC } from 'react'
import { Link } from 'react-router-dom'

export type BasketEmptyProps = unknown

const BasketEmpty: FC<BasketEmptyProps> = () => {
  return (
    <main>
      <h2 className="m-auto">Корзина пуста</h2>
      <Link to='/catalog' title="Перейти к покупкам" className="d-block mt-3">Перейти к покупкам</Link>
    </main>
  )
}

export default BasketEmpty

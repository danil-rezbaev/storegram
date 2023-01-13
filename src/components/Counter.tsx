import React, { FC, MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'
import RenderPrice from './RenderPrice'

export type CounterProps = {
  price?: string | number,
  title?: string | number,
  handler: MouseEventHandler<HTMLButtonElement>,
  className?: string
}

const Counter: FC<CounterProps> = (props) => {
  const {
    price,
    title,
    handler,
    className
  } = props

  return (
    <div className={cs('counter', className)}>
      <Button
        variant="secondary"
        className="counter--button"
        name="decrement"
        onClick={handler}
      >
        -
      </Button>

      { price
        ? (
        <RenderPrice
          price={price}
          className="counter--title"
        />
          )
        : null }

      { title
        ? (
        <p className="counter--title">{title}</p>
          )
        : null }

      <Button
        variant="secondary"
        className="counter--button"
        name="increment"
        onClick={handler}
      >
        +
      </Button>
    </div>
  )
}

export default Counter

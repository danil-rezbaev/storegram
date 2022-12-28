import React, { FC, MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'

export type CounterProps = {
  title: string | number,
  handler: MouseEventHandler<HTMLButtonElement>,
  className?: string
}

const Counter: FC<CounterProps> = (props) => {
  const {
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

      <p className="counter--title">{title}</p>

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

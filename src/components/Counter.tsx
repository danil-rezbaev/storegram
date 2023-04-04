import React, { FC, MouseEventHandler } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'
import RenderPrice from './RenderPrice'
import { useTranslation } from 'react-i18next'

export type CounterProps = {
  price?: string | number,
  title?: string | number | null | undefined,
  handler: MouseEventHandler<HTMLButtonElement>,
  size?: 'lg' | 'sm',
  className?: string
}

const Counter: FC<CounterProps> = (props) => {
  const {
    price,
    title,
    handler,
    size = 'sm',
    className
  } = props

  const { t } = useTranslation()

  const priceIsValid = typeof price !== 'undefined'

  return (
    <div className={cs('counter', size, className)}>
      <Button
        variant="secondary"
        className="counter--button"
        name="decrement"
        onClick={handler}
      >
        {t('counter:minus')}
      </Button>

      { priceIsValid
        ? <RenderPrice
            price={price}
            className="counter--title"
          />
        : null }

      { title
        ? <p className="counter--title">{title}</p>
        : null }

      <Button
        variant="secondary"
        className="counter--button"
        name="increment"
        onClick={handler}
      >
        {t('counter:plus')}
      </Button>
    </div>
  )
}

export default Counter

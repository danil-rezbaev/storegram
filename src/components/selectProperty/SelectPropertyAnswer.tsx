import React, { FC, useCallback, useState } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'

export type SelectPropertyAnswerProps = {
  title: string,
  selected: boolean,
  priceChange: number,
  type: 'radio' | 'checkbox',
}

const SelectPropertyAnswer: FC<SelectPropertyAnswerProps> = (props) => {
  const {
    title,
    type,
    priceChange = 0
  } = props

  const [selected, setSelected] = useState<boolean>(false)

  const toggleSelected = useCallback(() => {
    setSelected(value => !value)
  }, [])

  return (
    <div className={ cs('select-property-answer', selected ? 'selected' : null) }>
      <div className={ cs('select-property-answer--field', type) }></div>

      <p className="select-property-answer--title">{title}</p>

      <Button
        variant="black"
        size="sm"
        className="select-property-item--button"
        onClick={toggleSelected}
      >
        { priceChange }
      </Button>
    </div>
  )
}

export default SelectPropertyAnswer

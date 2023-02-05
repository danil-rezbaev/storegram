import React, { FC } from 'react'
import cs from 'classnames'
import { ReactComponent as CheckIcon } from '../assets/images/pages/catalog/check.svg'

export type CheckboxProps = {
  active: boolean,
  type: 'checkbox' | 'radio',
  className?: string
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const {
    type,
    active,
    className
  } = props

  return (
    <div className={ cs('checkbox', type, active, className) }>
      <CheckIcon className="icon"/>
    </div>
  )
}

export default Checkbox

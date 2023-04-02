import React, { FC, ReactNode } from 'react'
import cs from 'classnames'
import { Fields } from '../layout/types/catalog/productsDataTypes'
import Checkbox from './Checkbox'

export type SelectFieldProps = {
  title: string,
  active: boolean,
  type: Fields,
  name?: string,
  children?: ReactNode,
  onClick?: (arg: any) => any,
  className?: string
}

const SelectField: FC<SelectFieldProps> = (props) => {
  const {
    title,
    active,
    name,
    type,
    children,
    onClick,
    className
  } = props

  return (
    <button
      type="button"
      className={ cs('select-field', className, active ? 'selected' : null) }
      onClick={onClick}
      name={name}
    >
      <Checkbox type={type} active={active} className='select-field--mark' />

      <p className="select-field--title">{title}</p>

      {children}
    </button>
  )
}

export default SelectField

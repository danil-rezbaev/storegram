import React, { FC, ReactNode } from 'react'
import cs from 'classnames'
import { ReactComponent as CheckIcon } from '../assets/images/pages/catalog/check.svg'
import { ProductItemOptions } from '../layout/types/catalog/productsDataTypes'

export type SelectFieldProps = Pick<ProductItemOptions, 'type'> & {
  title: string,
  active: boolean,
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
      <div className={ cs('select-field--checkbox', type) }>
        <CheckIcon className="icon"/>
      </div>

      <p className="select-field--title">{title}</p>

      {children}
    </button>
  )
}

export default SelectField

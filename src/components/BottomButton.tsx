import React, { FC } from 'react'
import { Button, ButtonProps } from 'react-bootstrap'
import cs from 'classnames'

export type BottomButtonProps = ButtonProps

const BottomButton: FC<BottomButtonProps> = (props) => {
  const {
    title,
    children,
    className
  } = props

  return (
      <div className="bottom-button">
        <Button
          variant="success"
          {...props}
          className={cs('text-white w-100', className)}
          size="lg"
        >
          { title }
        </Button>

        {children}
      </div>
  )
}

export default BottomButton

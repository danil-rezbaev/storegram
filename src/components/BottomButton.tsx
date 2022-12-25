import React, { FC, ReactNode } from 'react'
import { Button } from 'react-bootstrap'
import cs from 'classnames'

export type BottomButtonProps = {
  children: ReactNode,
  className?: string
}

const BottomButton: FC<BottomButtonProps> = (props) => {
  const {
    children,
    className
  } = props

  return (
      <div className="bottom-button">
        <Button
          variant="success"
          className={cs('text-white w-100', className)}
          size="lg"
        >
          { children }
        </Button>
      </div>
  )
}

export default BottomButton

import React, { FC } from 'react'
import { Button, ButtonProps, Container } from 'react-bootstrap'
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
        <Container>
          <div className="bottom-button--content">
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
        </Container>
      </div>
  )
}

export default BottomButton

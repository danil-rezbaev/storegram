import React, { FC, ReactNode } from 'react'
import cs from 'classnames'
import { Container } from 'react-bootstrap'

export type PageProps = {
  children: ReactNode,
  className?: string
}

const Page: FC<PageProps> = (props) => {
  const {
    children,
    className
  } = props

  return (
    <div className={cs('page', className)}>
      <Container className="page--container">
        {children}
      </Container>
    </div>
  )
}

export default Page

import React, { FC, useState } from 'react'
import cs from 'classnames'
import { Offcanvas } from 'react-bootstrap'

export type BottomPopupProps = {
  title?: string,
  className?: string,
  children: React.ReactNode,
  visible: boolean
}

const BottomPopup: FC<BottomPopupProps> = (props) => {
  const {
    title,
    className,
    children,
    visible
  } = props

  const [show, setShow] = useState(visible)

  const handleClose = () => setShow(false)
  // const handleShow = () => setShow(true)

  return (
    <Offcanvas
      className={cs('bottom-popup', className)}
      show={show}
      onHide={handleClose}
      placement="bottom"
      {...props}
    >
      <Offcanvas.Header closeButton>
        { title
          ? <Offcanvas.Title> {title} </Offcanvas.Title>
          : null }
      </Offcanvas.Header>

      <Offcanvas.Body>
        { children }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default BottomPopup

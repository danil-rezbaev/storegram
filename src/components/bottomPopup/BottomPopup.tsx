import React, { FC } from 'react'
import cs from 'classnames'
import { Offcanvas } from 'react-bootstrap'

export type BottomPopupProps = {
  title?: string,
  className?: string,
  children: React.ReactNode,
  visible: boolean,
  visibleHandle: (value: boolean) => void,
}

const BottomPopup: FC<BottomPopupProps> = (props) => {
  const {
    title,
    className,
    children,
    visible,
    visibleHandle
  } = props

  const handleClose = () => visibleHandle(false)

  return (
    <Offcanvas
      className={cs('bottom-popup', className)}
      show={visible}
      onHide={handleClose}
      placement="bottom"
      {...props}
    >

      {title
        ? <Offcanvas.Header title={title}/>
        : null}

      <Offcanvas.Body>
        { children }
      </Offcanvas.Body>
    </Offcanvas>
  )
}

export default BottomPopup

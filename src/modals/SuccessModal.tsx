import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'

export type SuccessModalProps = {
  orderId: string,
  show: boolean,
  showHandler: (visible: boolean) => void
}

const SuccessModal: FC<SuccessModalProps> = (props) => {
  const {
    orderId,
    show,
    showHandler
  } = props

  const handleClose = () => showHandler(false)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заказ #{orderId} размещен</Modal.Title>
      </Modal.Header>
      <Modal.Body>Мы получили данные о вашем заказе и уже работаем над ним.</Modal.Body>
      <Modal.Footer className="justify-content-start">
        <Button variant="primary" onClick={handleClose}>
          Понял
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SuccessModal

import React, { FC } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { nanoid } from 'nanoid'

export type SuccessModalProps = {
  show: boolean,
  showHandler: (visible: boolean) => void
}

const SuccessModal: FC<SuccessModalProps> = (props) => {
  const {
    show,
    showHandler
  } = props

  const handleClose = () => showHandler(false)

  const orderId = nanoid(5)

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Заказ #{orderId} размещен</Modal.Title>
      </Modal.Header>
      <Modal.Body>Мы получили данные о вашем заказе и уже работаем над ним.</Modal.Body>
      <Modal.Footer className="justify-content-start">
        <Button variant="primary" onClick={handleClose}>
          Хорошо!
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default SuccessModal

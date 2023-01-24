import React, { FC, FormEventHandler, useCallback, useState } from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'
import { Button, Form } from 'react-bootstrap'

export type PlaceOrderPageProps = unknown

const PlaceOrderPage: FC<PlaceOrderPageProps> = () => {
  const [validated, setValidated] = useState<boolean>(false)

  const defaultValue = {
    payment: 'card-payment',
    phone: '+7'
  }
  const [formData, setFormData] = useState<Record<'payment' | 'phone', string>>(defaultValue)

  const onChangeField = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget

    setFormData((data) => ({
      ...data,
      [name]: value
    }))
  }, [])

  const onChangeSelect = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target

    setFormData((data) => ({
      ...data,
      [name]: value
    }))
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    const form = event.currentTarget

    event.stopPropagation()
    event.preventDefault()

    if (form.checkValidity() === true) {
      // if (_.keys(formData).length > 0) {
      //   dispatch(addAddress(formData as DeliveryAddress))
      //   dispatch(visibleHandle({ value: false }))
      // }
    }

    setValidated(true)
  }, [formData])

  return (
    <Page className="page--place-order">
      <PageHeader title="Оформить заказ" backLink="/basket" />

      <Form
        className="mt-4 text-start"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Способ оплаты</Form.Label>
          <Form.Select
            name="payment"
            aria-label="payment"
            onChange={onChangeSelect}
            value={formData.payment}
            required
          >
            <option value="card-payment">Оплата картой</option>
            <option value="cash-payment">Оплата наличными</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>Номер телефона</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            onChange={onChangeField}
            value={formData.phone}
          />
          <Form.Control.Feedback type="invalid">
            Введите корректный номер телефона
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" size="lg" variant="success" className="w-100 text-white">Сохранить данные</Button>
      </Form>
    </Page>
  )
}

export default PlaceOrderPage

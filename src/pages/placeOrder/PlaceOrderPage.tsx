import React, { FC, FormEventHandler, useCallback, useState } from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'
import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

export type PlaceOrderPageProps = unknown

const PlaceOrderPage: FC<PlaceOrderPageProps> = () => {
  const { t } = useTranslation()

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
      <PageHeader title={t('placeOrder:title')} backLink="/basket" />

      <Form
        className="mt-4 text-start"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>{t('placeOrder:paymentMethod.title')}</Form.Label>
          <Form.Select
            name="payment"
            aria-label="payment"
            onChange={onChangeSelect}
            value={formData.payment}
            required
          >
            <option value="card-payment">{t('placeOrder:paymentMethod.cardPayment')}</option>
            <option value="cash-payment">{t('placeOrder:paymentMethod.cashPayment')}</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formComment">
          <Form.Label>{t('placeOrder:phoneNumber.title')}</Form.Label>
          <Form.Control
            type="tel"
            name="phone"
            onChange={onChangeField}
            value={formData.phone}
            minLength={10}
          />
          <Form.Control.Feedback type="invalid">
            {t('placeOrder:phoneNumber.hint')}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" size="lg" variant="success" className="w-100 text-white">
          {t('placeOrder:buttons.saveData')}
        </Button>
      </Form>
    </Page>
  )
}

export default PlaceOrderPage

import React, { FC } from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import * as yup from 'yup'

export type PlaceOrderPageProps = unknown

const PlaceOrderPage: FC<PlaceOrderPageProps> = () => {
  const { t } = useTranslation()

  const formSubmit = (value: any) => {
    console.log('value', value)
  }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const validationSchema = yup.object().shape({
    payment: yup.string().required(),
    phone: yup.string().matches(phoneRegExp).required(),
    address: yup.string().required(),
    flat: yup.string().required(),
    entrance: yup.string().required(),
    floor: yup.string().required()
  })

  const initialValues = {
    payment: 'card-payment',
    phone: '',
    address: '',
    flat: '',
    entrance: '',
    floor: ''
  }

  return (
    <Page className="page--place-order">
      <PageHeader title={t('placeOrder:title')} backLink="/basket" />

      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
        validateOnBlur
        validateOnMount
      >
        {({ values, errors, handleChange, handleBlur, isValid = false, handleSubmit }) => (
          <Form
            className="mt-4 text-start"
            onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>{t('placeOrder:paymentMethod.title')}</Form.Label>
              <Form.Select
                name="payment"
                aria-label="payment"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.payment}
                required
              >
                <option value="card-payment">{t('placeOrder:paymentMethod.cardPayment')}</option>
                <option value="cash-payment">{t('placeOrder:paymentMethod.cashPayment')}</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t('placeOrder:phoneNumber.title')}</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              <Form.Control.Feedback type="invalid">
                {t('placeOrder:phoneNumber.hint')}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>{t('basket:content.receivingMethod.delivery.form.address.title')}</Form.Label>
              <Form.Control
                type="text"
                placeholder={t('basket:content.receivingMethod.delivery.form.address.placeholder') ?? undefined}
                name='address'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              <Form.Control.Feedback type="invalid">
                {t('basket:content.receivingMethod.delivery.form.address.hint')}
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>{t('basket:content.receivingMethod.delivery.form.flat.title')}</Form.Label>
                  <Form.Control
                    type="text"
                    className="m-0"
                    name='flat'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.flat}
                    required
                  />
                  { errors.flat
                    ? (
                      <Form.Control.Feedback type="invalid">
                        {t('basket:content.receivingMethod.delivery.form.flat.hint')}
                      </Form.Control.Feedback>
                      )
                    : null }
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>{t('basket:content.receivingMethod.delivery.form.entrance.title')}</Form.Label>
                  <Form.Control
                    type="text"
                    className="m-0"
                    name='entrance'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.entrance}
                    required
                  />
                  { errors.entrance
                    ? (
                      <Form.Control.Feedback type="invalid">
                        {t('basket:content.receivingMethod.delivery.form.entrance.hint')}
                      </Form.Control.Feedback>
                      )
                    : null }
                </Form.Group>
              </Col>

              <Col>
                <Form.Group>
                  <Form.Label>{t('basket:content.receivingMethod.delivery.form.floor.title')}</Form.Label>
                  <Form.Control
                    type="text"
                    className="m-0"
                    name='floor'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floor}
                  />
                  { errors.floor
                    ? (
                    <Form.Control.Feedback type="invalid">
                      {t('basket:content.receivingMethod.delivery.form.floor.hint')}
                    </Form.Control.Feedback>
                      )
                    : null }
                </Form.Group>
              </Col>
            </Row>

            <Button
              type="submit"
              variant="success"
              className="w-100 text-white btn-md"
              disabled={!isValid}
              onClick={handleBlur}
            >
              {t('placeOrder:buttons.saveData')}
            </Button>
          </Form>
        )}
      </Formik>
    </Page>
  )
}

export default PlaceOrderPage

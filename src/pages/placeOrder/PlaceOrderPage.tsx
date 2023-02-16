import React, { FC } from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import * as yup from 'yup'
import cs from 'classnames'

export type PlaceOrderPageProps = unknown

const PlaceOrderPage: FC<PlaceOrderPageProps> = () => {
  const { t } = useTranslation()

  const formSubmit = (value: any) => {
    console.log('value', value)
  }

  const phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/m

  const validationSchema = yup.object().shape({
    payment: yup.string().required(t('basket:content.receivingMethod.delivery.form.payment.hint') ?? undefined),
    phone: yup.string().matches(phoneRegExp, t('placeOrder:phone.hint') ?? undefined).required(t('placeOrder:phone.hint') ?? undefined),
    address: yup.string().required(t('basket:content.receivingMethod.delivery.form.address.hint') ?? undefined),
    flat: yup.string().required(t('basket:content.receivingMethod.delivery.form.flat.hint') ?? undefined),
    entrance: yup.string().required(t('basket:content.receivingMethod.delivery.form.entrance.hint') ?? undefined),
    floor: yup.string().required(t('basket:content.receivingMethod.delivery.form.floor.hint') ?? undefined)
  })

  const initialValues = {
    payment: 'card-payment',
    phone: '+7',
    address: '',
    flat: '',
    entrance: '',
    floor: ''
  }

  return (
    <Page className="page place-order">
      <PageHeader title={t('placeOrder:title')} backLink="/basket" />

      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit }) => (
          <Form
            className="form"
            onSubmit={handleSubmit}
            noValidate={true}
          >
            <Form.Group className="form--container">
              <Form.Label
                className={cs(errors.payment ? 'text-danger' : null)}
              >
                {t('placeOrder:paymentMethod.title')}
              </Form.Label>
              <Form.Select
                name="payment"
                aria-label="payment"
                isInvalid={!!errors.payment}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.payment}
              >
                <option value="card-payment">{t('placeOrder:paymentMethod.cardPayment')}</option>
                <option value="cash-payment">{t('placeOrder:paymentMethod.cashPayment')}</option>
              </Form.Select>
              { errors.payment
                ? <p className="form--error-hint">{ errors.payment }</p>
                : null }
            </Form.Group>

            <Form.Group className="form--container">
              <Form.Label
                className={cs(errors.phone ? 'text-danger' : null)}
              >
                {t('placeOrder:phone.title')}
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                isInvalid={!!errors.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              { errors.phone
                ? <p className="form--error-hint">{ errors.phone }</p>
                : null }
            </Form.Group>

            <Form.Group className="form--container">
              <Form.Label
                className={cs(errors.address ? 'text-danger' : null)}
              >
                {t('basket:content.receivingMethod.delivery.form.address.title')}
              </Form.Label>
              <Form.Control
                type="text"
                placeholder={t('basket:content.receivingMethod.delivery.form.address.placeholder') ?? undefined}
                name='address'
                isInvalid={!!errors.address}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.address}
              />
              { errors.address
                ? <p className="form--error-hint">{ errors.address }</p>
                : null }
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="form--container">
                  <Form.Label
                    className={cs(errors.flat ? 'text-danger' : null)}
                  >
                    {t('basket:content.receivingMethod.delivery.form.flat.title')}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="m-0"
                    name='flat'
                    isInvalid={!!errors.flat}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.flat}
                  />
                  { errors.flat
                    ? <p className="form--error-hint">{ errors.flat }</p>
                    : null }
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="form--container">
                  <Form.Label
                    className={cs(errors.entrance ? 'text-danger' : null)}
                  >
                    {t('basket:content.receivingMethod.delivery.form.entrance.title')}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="m-0"
                    name='entrance'
                    isInvalid={!!errors.entrance}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.entrance}
                  />
                  { errors.entrance
                    ? <p className="form--error-hint">{ errors.entrance }</p>
                    : null }
                </Form.Group>
              </Col>

              <Col>
                <Form.Group className="form--container">
                  <Form.Label
                    className={cs(errors.floor ? 'text-danger' : null)}
                  >
                    {t('basket:content.receivingMethod.delivery.form.floor.title')}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    className="m-0"
                    name='floor'
                    isInvalid={!!errors.floor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.floor}
                  />
                  { errors.floor
                    ? <p className="form--error-hint">{ errors.floor }</p>
                    : null }
                </Form.Group>
              </Col>
            </Row>

            <Button
              type="submit"
              variant="primary"
              className="w-100 btn-md"
              name="submit"
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

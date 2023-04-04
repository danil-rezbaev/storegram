import React, { FC, useState } from 'react'
import Page from '../../components/page/Page'
import PageHeader from '../../components/page/PageHeader'
import { Button, Form } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import { Formik } from 'formik'
import * as yup from 'yup'
import cs from 'classnames'
import SuccessModal from '../../modals/SuccessModal'
import axios from '../../axios'
import { useAppSelector } from '../../hooks/redux'
import _ from 'lodash'
import { nanoid } from 'nanoid'

export type PlaceOrderPageProps = unknown

const PlaceOrderPage: FC<PlaceOrderPageProps> = () => {
  const { t } = useTranslation()

  const [orderId, setOrderId] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const { products, amount, quantity } = useAppSelector(store => store.basket)

  const showHandler = (visible: boolean) => {
    setShow(visible)
  }

  const formSubmit = async (value: any) => {
    const productFormat = _.values(products).filter(item => item.count > 0)

    const generateId = nanoid(5)

    const order = {
      id: generateId,
      date: new Date().toDateString(),
      client: {
        name: value.name,
        phone: value.phone
      },
      products: productFormat,
      amount,
      quantity
    }

    const data = await axios.post('/order', { order })

    if (data.status === 200) {
      setOrderId(generateId)
      setShow(true)
    }
  }

  const phoneRegExp = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/m

  const validationSchema = yup.object().shape({
    name: yup.string().min(3, 'Минимум 3 символа').required(t('placeOrder:name.hint') ?? undefined),
    phone: yup.string().matches(phoneRegExp, t('placeOrder:phone.hint') ?? undefined).required(t('placeOrder:phone.hint') ?? undefined)
  })

  const initialValues = {
    name: '',
    phone: '+7'
  }

  return (
    <Page className="page place-order">
      <PageHeader title={t('placeOrder:title')} backLink="/basket" />

      <Formik
        initialValues={initialValues}
        onSubmit={formSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleBlur, handleSubmit, touched }) => (
          <Form
            className="form"
            onSubmit={handleSubmit}
            noValidate={true}
          >
            <Form.Group className="form--container">
              <Form.Label
                className={cs(errors.name && touched.name ? 'text-danger' : null)}
              >
                {t('placeOrder:name.title')}
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                isInvalid={!!errors.name && touched.name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              { errors.name && touched.name
                ? <p className="form--error-hint">{ errors.name }</p>
                : null }
            </Form.Group>

            <Form.Group className="form--container">
              <Form.Label
                className={cs(errors.phone && touched.phone ? 'text-danger' : null)}
              >
                {t('placeOrder:phone.title')}
              </Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                isInvalid={!!errors.phone && touched.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
              />
              { errors.phone && touched.phone
                ? <p className="form--error-hint">{ errors.phone }</p>
                : null }
            </Form.Group>

            <Button
              type="submit"
              variant="primary"
              className="form--submit w-100 btn-md"
              name="submit"
              onClick={handleBlur}
            >
              {t('placeOrder:buttons.saveData')}
            </Button>
          </Form>
        )}
      </Formik>

      <SuccessModal
        orderId={orderId}
        show={show}
        showHandler={showHandler}
      />
    </Page>
  )
}

export default PlaceOrderPage

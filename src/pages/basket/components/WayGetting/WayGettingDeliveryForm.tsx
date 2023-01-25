import React, { FC, FormEventHandler, useCallback, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { DeliveryAddress } from '../../../../layout/types/catalog/productsDataTypes'
import { useAppDispatch } from '../../../../hooks/redux'
import { addAddress, visibleHandle } from '../../../../store/deliveryAddress'
import _ from 'lodash'
import { useTranslation } from 'react-i18next'

export type WayGettingDeliveryFormProps = {
  className?: string
}

const WayGettingDeliveryForm: FC<WayGettingDeliveryFormProps> = (props) => {
  const {
    className
  } = props

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const [validated, setValidated] = useState<boolean>(false)

  const [formData, setFormData] = useState<Record<string, string> | null>(null)

  const onChangeField = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name
    const value = event.currentTarget.value

    setFormData((data) => {
      if (data) {
        return {
          ...data,
          [name]: value
        }
      } else {
        return {
          [name]: value
        }
      }
    })
  }, [])

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback((event) => {
    const form = event.currentTarget

    event.stopPropagation()
    event.preventDefault()

    if (form.checkValidity() === true) {
      if (_.keys(formData).length > 0) {
        dispatch(addAddress(formData as DeliveryAddress))
        dispatch(visibleHandle({ value: false }))
      }
    }

    setValidated(true)
  }, [formData])

  const fieldsData = [
    {
      name: 'city',
      type: 'text',
      required: true
    },
    {
      name: 'street',
      type: 'text',
      required: true
    },
    {
      name: 'house',
      type: 'text',
      required: true
    },
    {
      name: 'flat',
      type: 'text',
      required: true
    },
    {
      name: 'entrance',
      type: 'text',
      required: true
    },
    {
      name: 'floor',
      type: 'text',
      required: true
    }
  ]

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={className}>
      {fieldsData.map(item => (
        <Form.Group className="mb-3" controlId={`formCity${item.name}`} key={item.name}>
          <Form.Label>
            {t(`basket:content.wayGetting.delivery.form.${item.name}.title`)}
          </Form.Label>
          <Form.Control
            type="text"
            placeholder={t(`basket:content.wayGetting.delivery.form.${item.name}.placeholder`) ?? undefined}
            name={item.name}
            onChange={onChangeField}
            required={item.required}
          />
          <Form.Control.Feedback type="invalid">
            {t(`basket:content.wayGetting.delivery.form.${item.name}.hint`)}
          </Form.Control.Feedback>
        </Form.Group>
      ))}

      <Button type="submit" size="lg" variant="success" className="w-100 text-white">
        {t('basket:content.wayGetting.delivery.form.buttons.saveData')}
      </Button>
    </Form>
  )
}

export default WayGettingDeliveryForm

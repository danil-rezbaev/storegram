import React, { FC, FormEventHandler, useCallback, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { DeliveryAddress } from '../../../../layout/types/catalog/productsDataTypes'
import { useAppDispatch } from '../../../../hooks/redux'
import { addAddress, visibleHandle } from '../../../../store/deliveryAddress'
import _ from 'lodash'

export type WayGettingDeliveryFormProps = {
  className?: string
}

const WayGettingDeliveryForm: FC<WayGettingDeliveryFormProps> = (props) => {
  const {
    className
  } = props

  const dispatch = useAppDispatch()
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

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} className={className}>
      <Form.Group className="mb-3" controlId="formCity">
        <Form.Label>Город</Form.Label>
        <Form.Control
          type="text"
          placeholder="Москва"
          name="city"
          onChange={onChangeField}
          required
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста укажите город
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formStreet">
        <Form.Label>Улица</Form.Label>
        <Form.Control
          type="text"
          placeholder="Красная площадь"
          name="street"
          onChange={onChangeField}
          required
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста укажите улицу
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formHouse">
        <Form.Label>Дом или строение</Form.Label>
        <Form.Control
          type="text"
          placeholder="30/2"
          name="house"
          onChange={onChangeField}
          required
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста укажите дом
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFlat">
        <Form.Label>Квартира</Form.Label>
        <Form.Control
          type="text"
          placeholder="102"
          name="flat"
          onChange={onChangeField}
          required
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста укажите квартиру или офис
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formEntrance">
        <Form.Label>Подъезд</Form.Label>
        <Form.Control
          type="text"
          placeholder="3"
          name="entrance"
          onChange={onChangeField}
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста укажите подъезд
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formFloor">
        <Form.Label>Этаж</Form.Label>
        <Form.Control
          type="text"
          placeholder="3"
          name="floor"
          onChange={onChangeField}
          required
        />
        <Form.Control.Feedback type="invalid">
          Пожалуйста укажите этаж
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formComment">
        <Form.Label>Комментарий</Form.Label>
        <Form.Control
          type="text"
          placeholder="Например убрать лук"
          as="textarea"
          name="comment"
          onChange={onChangeField}
        />
      </Form.Group>

      <Button type="submit" variant="success" className="w-100 text-white">Сохранить данные</Button>
    </Form>
  )
}

export default WayGettingDeliveryForm

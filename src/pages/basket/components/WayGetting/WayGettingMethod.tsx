import React, { FC, MouseEventHandler, useCallback, useMemo } from 'react'
import cs from 'classnames'
import WayGettingSelectedAddress from './WayGettingSelectedAddress'
import { openModal, updateDeliveryPrice } from '../../../../store/deliveryAddress'
import { updatePickupPrice, visibleHandle } from '../../../../store/pickupAddress'
import { useAppDispatch } from '../../../../hooks/redux'
import { WayGettingMethodType } from '../../../../layout/types/catalog/productsDataTypes'
import { ReactComponent as PlusIcon } from '../../../../assets/images/pages/basket/plus.svg'
import { ReactComponent as EditIcon } from '../../../../assets/images/pages/basket/edit.svg'

export type WayGettingMethodProps = {
  active: boolean,
  data: WayGettingMethodType | undefined,
  price: number,
  name: string,
  className?: string
}

const WayGettingMethod: FC<WayGettingMethodProps> = (props) => {
  const {
    active,
    name,
    data,
    price,
    className
  } = props

  if (!active || !data) {
    return null
  }

  const {
    address,
    filled
  } = data

  const dispatch = useAppDispatch()

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    if (name === 'delivery') {
      const defineStage = filled ? 2 : 1
      dispatch(openModal({ stage: defineStage }))
      dispatch(updateDeliveryPrice({ price }))
    } else if (name === 'pickup') {
      dispatch(visibleHandle({ value: true }))
      dispatch(updatePickupPrice({ price }))
    }
  }, [filled, name])

  const buttonContentView = useMemo(() => {
    if (filled) {
      return (
        <>
          <EditIcon className="button--icon"/>
          <p className="button--title">Изменить адрес</p>
        </>
      )
    }
    return (
      <>
        <PlusIcon className="button--icon" />
        <p className="button--title">Указать адрес</p>
      </>
    )
  }, [filled])

  return (
    <div className={cs('way-getting-method way-getting-delivery', className)}>
      <WayGettingSelectedAddress
        address={address}
        filled={filled}
        hint="Укажите адрес доставки"
        price={price}
      />

      <div className="way-getting-content--control">
        <button className="way-getting-content--button" onClick={buttonClick}>
          { buttonContentView }
        </button>
      </div>
    </div>
  )
}

export default WayGettingMethod

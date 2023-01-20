import React, { FC, MouseEventHandler, useCallback } from 'react'
import cs from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import WayGettingList from './WayGettingList'
import { ReactComponent as EditIcon } from '../../../../assets/images/pages/basket/edit.svg'
import { openModal } from '../../../../store/deliveryAddress'
import { ReactComponent as PlusIcon } from '../../../../assets/images/pages/basket/plus.svg'

export type WayGettingDeliveryProps = {
  className?: string
}

const WayGettingDelivery: FC<WayGettingDeliveryProps> = (props) => {
  const {
    className
  } = props

  const dispatch = useAppDispatch()
  const deliveryAddressStore = useAppSelector(store => store.deliveryAddress)
  const { addresses, filled, selectedItemId } = deliveryAddressStore
  const selectedAddress = addresses[selectedItemId]?.format

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    const defineStage = filled === true ? 2 : 1
    dispatch(openModal({ stage: defineStage }))
  }, [])

  return (
    <div className={cs('way-getting-content way-getting-delivery', className)}>
      <WayGettingList address={selectedAddress} filled={filled} hint="Пока нет адресов для доставки" />

      <div className="way-getting-content--control">
        {filled
          ? (
            <button className="way-getting-content--button" onClick={buttonClick}>
              <EditIcon className="button--icon" />
              <p className="button--title">Изменить адрес</p>
            </button>
            )
          : (
            <button className="way-getting-content--button" onClick={buttonClick}>
              <PlusIcon className="button--icon" />
              <p className="button--title">Указать адрес</p>
            </button>
            )}
      </div>
    </div>
  )
}

export default WayGettingDelivery

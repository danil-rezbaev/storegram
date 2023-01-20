import React, { FC, MouseEventHandler, useCallback, useEffect } from 'react'
import cs from 'classnames'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import WayGettingList from './WayGettingList'
import { addAddress, visibleHandle } from '../../../../store/pickupAddress'
import { ReactComponent as EditIcon } from '../../../../assets/images/pages/basket/edit.svg'
import { DeliveryMethods } from '../../../../layout/types/catalog/productsDataTypes'

export type WayGettingPickupProps = {
  data: DeliveryMethods[],
  className?: string
}

const WayGettingPickup: FC<WayGettingPickupProps> = (props) => {
  const {
    data,
    className
  } = props

  useEffect(() => {
    dispatch(addAddress({ address: data[0].title }))
  }, [])

  const dispatch = useAppDispatch()
  const selectedAddressStore = useAppSelector(store => store.pickupAddress)
  const { selectedAddress, filled } = selectedAddressStore

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(visibleHandle({ value: true }))
  }, [])

  return (
    <div className={cs('way-getting-content way-getting-pickup', className)}>
      <WayGettingList address={selectedAddress} filled={filled} hint="Пока нет адресов для самовывоза" />

      { filled
        ? (
          <div className="way-getting-content--control">
            <button className="way-getting-content--button" onClick={buttonClick}>
              <EditIcon className="button--icon" />
              <p className="button--title">Изменить адрес</p>
            </button>
          </div>
          )
        : null }
    </div>
  )
}

export default WayGettingPickup

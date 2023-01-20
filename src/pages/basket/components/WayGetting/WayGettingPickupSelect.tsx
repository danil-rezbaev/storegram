import React, { FC, MouseEventHandler, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import cs from 'classnames'
import SelectField from '../../../../components/SelectField'
import { DeliveryMethods } from '../../../../layout/types/catalog/productsDataTypes'
import { addAddress, visibleHandle } from '../../../../store/pickupAddress'

export type WayGettingDeliverSelectProps = {
  data: DeliveryMethods[],
  className?: string
}

const WayGettingDeliverSelect: FC<WayGettingDeliverSelectProps> = (props) => {
  const {
    data,
    className
  } = props

  const dispatch = useAppDispatch()
  const pickupAddressStore = useAppSelector(state => state.pickupAddress)
  const { selectedAddress } = pickupAddressStore

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const name = event.currentTarget.name
    dispatch(addAddress({ address: name }))
    dispatch(visibleHandle({ value: false }))
  }, [])

  return (
    <div className={cs('way-getting-delivery-select', className)}>
      {data.map((item) => (
        <SelectField
          key={item.id}
          name={item.title}
          type="radio"
          title={item.title}
          active={item.title === selectedAddress}
          onClick={buttonClick}
        />
      ))}
    </div>
  )
}

export default WayGettingDeliverSelect

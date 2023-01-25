import React, { FC, MouseEventHandler, useCallback, useEffect, useMemo, useState } from 'react'
import cs from 'classnames'
import { ReceivingMethods, WayGettingMethodType } from '../../../../layout/types/catalog/productsDataTypes'
import DeliveryAddressModal from '../../../../modals/DeliveryAddressModal'
import PickupAddressModal from '../../../../modals/PickupAddressModal'
import { pickupAddressesData } from '../../../../layout/data/basket/pickupAddressesData'
import WayGettingMethod from './WayGettingMethod'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { addAddress } from '../../../../store/pickupAddress'
import { updateWayGetting } from '../../../../store/globalSlice'

export type WayGettingProps = {
  data: ReceivingMethods[],
  className?: string
}

const WayGetting: FC<WayGettingProps> = (props) => {
  const {
    data,
    className
  } = props

  const dispatch = useAppDispatch()

  const defaultActive = useMemo(() => {
    if (data && data[0].name) {
      return data[0].name
    }
    return null
  }, [data])

  const [activeTab, setActiveTab] = useState<string | null>(defaultActive)
  const [methodData, setMethodData] = useState<Record<string, WayGettingMethodType>>({})

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name
    setActiveTab(targetName)
  }, [])

  const pickupStore = useAppSelector(store => store.pickupAddress)
  const deliveryStore = useAppSelector(store => store.deliveryAddress)

  useEffect(() => {
    const { selectedAddress, price, filled } = pickupStore

    if (!selectedAddress) {
      if (pickupAddressesData[0].title) {
        dispatch(addAddress({ address: pickupAddressesData[0].title }))
      }
    }

    setMethodData(value => ({
      ...value,
      pickup: {
        type: 'pickup',
        address: selectedAddress,
        price,
        filled
      }
    }))
  }, [pickupStore])

  useEffect(() => {
    const { addresses, price, filled, selectedItemId } = deliveryStore
    const selectedAddress = addresses[selectedItemId]?.format

    setMethodData(value => ({
      ...value,
      delivery: {
        type: 'delivery',
        address: selectedAddress,
        price,
        filled
      }
    }))
  }, [deliveryStore])

  useEffect(() => {
    const activeMethod = activeTab ? methodData[activeTab] : null

    if (activeMethod) {
      dispatch(updateWayGetting({
        wayGetting: activeMethod
      }))
    }
  }, [activeTab, methodData])

  return (
    <div className={cs('way-getting', className)}>
      <div className="way-getting--header">
        {data.map((item) => (
          <button
            key={item.id}
            type="button"
            name={item.name}
            className={cs('way-getting--control-btn', item.name === activeTab ? 'active' : null)}
            onClick={buttonClick}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="way-getting--content">
        {data.map((item) => (
          <WayGettingMethod
            key={item.id}
            data={methodData[item.name]}
            active={item.name === activeTab}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>

      <DeliveryAddressModal/>
      <PickupAddressModal data={pickupAddressesData} />
    </div>
  )
}

export default WayGetting

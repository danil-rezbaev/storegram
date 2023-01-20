import React, { FC, MouseEventHandler, useCallback, useMemo, useState } from 'react'
import cs from 'classnames'
import WayGettingDelivery from './WayGettingDelivery'
import { ReceivingMethods } from '../../../../layout/types/catalog/productsDataTypes'
import DeliveryAddressModal from '../../../../modals/DeliveryAddressModal'
import PickupAddressModal from '../../../../modals/PickupAddressModal'
import WayGettingPickup from './WayGettingPickup'
import { pickupAddressesData } from '../../../../layout/data/basket/pickupAddressesData'

export type WayGettingProps = {
  data: ReceivingMethods[],
  className?: string
}

const WayGetting: FC<WayGettingProps> = (props) => {
  const {
    data,
    className
  } = props

  const defaultActive = useMemo(() => {
    if (data && data[0].name) {
      return data[0].name
    }
    return null
  }, [data])

  const [activeTab, setActiveTab] = useState<string | null>(defaultActive)

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const targetName = event.currentTarget.name
    setActiveTab(targetName)
  }, [])

  const viewContent = useMemo(() => {
    if (activeTab === 'delivery') {
      return <WayGettingDelivery />
    } else if (activeTab === 'pickup') {
      return <WayGettingPickup data={pickupAddressesData} />
    }

    return null
  }, [activeTab])

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
        {viewContent}
      </div>

      <DeliveryAddressModal/>
      <PickupAddressModal data={pickupAddressesData} />
    </div>
  )
}

export default WayGetting

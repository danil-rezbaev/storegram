import React, { FC, useCallback } from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { visibleHandle } from '../store/pickupAddress'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import { DeliveryMethods } from '../layout/types/catalog/productsDataTypes'
import WayGettingPickupSelect from '../pages/basket/components/WayGetting/WayGettingPickupSelect'

export type PickupAddressProps = {
  data: DeliveryMethods[]
}

const PickupAddressModal: FC<PickupAddressProps> = (props) => {
  const {
    data
  } = props

  const dispatch = useAppDispatch()
  const pickupAddressStore = useAppSelector(store => store.pickupAddress)
  const { modal } = pickupAddressStore
  const { visible } = modal

  const visibleHandler = useCallback((value: boolean): void => {
    dispatch(visibleHandle({ value }))
  }, [])

  const handleClose = () => visibleHandler(false)

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
      className="modal pickup-address-modal"
    >
      <div className="pickup-address-modal--content">
        <Button
          className="modal--close-btn border-0"
          onClick={handleClose}
          variant="light"
        >
          <CloseIcon/>
        </Button>

        <h4 className="mb-4">Добавить адрес</h4>

        <WayGettingPickupSelect data={data} />
      </div>
    </BottomPopup>
  )
}

export default PickupAddressModal

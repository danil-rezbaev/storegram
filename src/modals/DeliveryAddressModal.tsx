import React, { FC, useCallback, useMemo } from 'react'
import { Button } from 'react-bootstrap'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { visibleHandle } from '../store/deliveryAddress'
import WayGettingDeliveryForm from '../pages/basket/components/WayGetting/WayGettingDeliveryForm'
import BottomPopup from '../components/bottomPopup/BottomPopup'
import { ReactComponent as CloseIcon } from '../assets/images/pages/catalog/close.svg'
import WayGettingDeliverySelect from '../pages/basket/components/WayGetting/WayGettingDeliverySelect'
import { useTranslation } from 'react-i18next'

export type DeliveryAddressProps = unknown

const DeliveryAddressModal: FC<DeliveryAddressProps> = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const deliveryAddressStore = useAppSelector(store => store.deliveryAddress)
  const { modal } = deliveryAddressStore
  const { visible, stage } = modal

  const visibleHandler = useCallback((value: boolean): void => {
    dispatch(visibleHandle({ value }))
  }, [])

  const handleClose = () => visibleHandler(false)

  const view = useMemo(() => {
    if (stage === 1) {
      return <WayGettingDeliveryForm />
    } else if (stage === 2) {
      return <WayGettingDeliverySelect />
    }

    return null
  }, [stage])

  const titleFormat = useMemo(() => {
    if (stage === 1) {
      return t('basket:content.wayGetting.modal.addAddress.title')
    } else if (stage === 2) {
      return t('basket:content.wayGetting.modal.changeAddress.title')
    }

    return null
  }, [stage])

  return (
    <BottomPopup
      visible={visible}
      visibleHandle={visibleHandler}
      className="modal delivery-address-modal"
    >
      <div className="delivery-address-modal--content">
        <Button
          className="modal--close-btn border-0"
          onClick={handleClose}
          variant="light"
        >
          <CloseIcon/>
        </Button>

        <h4 className="mb-4">{titleFormat}</h4>

        {view}
      </div>
    </BottomPopup>
  )
}

export default DeliveryAddressModal

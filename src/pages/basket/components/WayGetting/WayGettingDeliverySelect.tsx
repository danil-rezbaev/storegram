import React, { FC, MouseEventHandler, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import _ from 'lodash'
import cs from 'classnames'
import { updateAddressSelected, updateStage, visibleHandle } from '../../../../store/deliveryAddress'
import SelectField from '../../../../components/SelectField'
import { Button } from 'react-bootstrap'
import { ReactComponent as PlusIcon } from '../../../../assets/images/pages/basket/plus.svg'
import { useTranslation } from 'react-i18next'

export type WayGettingDeliverySelectProps = {
  className?: string
}

const WayGettingDeliverySelect: FC<WayGettingDeliverySelectProps> = (props) => {
  const {
    className
  } = props

  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const deliveryAddressStore = useAppSelector(state => state.deliveryAddress)
  const { addresses, selectedItemId } = deliveryAddressStore
  const addressesKeys = _.keys(addresses)

  const buttonClick: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    const name = event.currentTarget.name
    dispatch(updateAddressSelected({ uniqueId: name }))
    dispatch(visibleHandle({ value: false }))
  }, [])

  const addNewAddress: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    dispatch(updateStage({ stage: 1 }))
  }, [])

  return (
    <div className={cs('way-getting-delivery-select', className)}>
      {addressesKeys.map((key) => (
        <SelectField
          key={key}
          name={key}
          type="radio"
          title={addresses[key].format}
          active={key === selectedItemId}
          onClick={buttonClick}
        />
      ))}

      <Button
        variant="outline-success"
        className="way-getting-delivery-select--btn"
        onClick={addNewAddress}
      >
        <PlusIcon className="btn--icon"/>
        <p>{t('basket:content.wayGetting.buttons.addAddress')}</p>
      </Button>
    </div>
  )
}

export default WayGettingDeliverySelect

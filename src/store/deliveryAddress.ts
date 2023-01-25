import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryAddress, DeliveryAddressStore } from '../layout/types/catalog/productsDataTypes'
import _ from 'lodash'

export type DeliveryAddressState = {
  addresses: Record<string, DeliveryAddressStore>,
  selectedItemId: string | null,
  filled: boolean,
  price: number,
  modal: {
    visible: boolean,
    stage: number
  }
}

const defaultState: DeliveryAddressState = {
  addresses: {},
  selectedItemId: null,
  filled: false,
  price: 0,
  modal: {
    visible: false,
    stage: 1
  }
}

function isDeliveryAddressState (obj: any): obj is DeliveryAddressState {
  if (!obj) return false

  const objAsDeliveryAddressState = obj as DeliveryAddressState
  return (objAsDeliveryAddressState.addresses !== undefined &&
    objAsDeliveryAddressState.selectedItemId !== undefined &&
    objAsDeliveryAddressState.filled !== undefined &&
    objAsDeliveryAddressState.price !== undefined &&
    objAsDeliveryAddressState.modal !== undefined)
}

const initialState = isDeliveryAddressState(JSON.parse(localStorage.getItem('delivery') as string))
  ? JSON.parse(localStorage.getItem('delivery') as string)
  : defaultState

const saveStore = (state: DeliveryAddressState) => localStorage.setItem('delivery', JSON.stringify(state))

const DeliveryAddressSlice = createSlice({
  name: 'deliveryAddress',
  initialState,
  reducers: {
    addAddress (state, action: PayloadAction<DeliveryAddress>) {
      const { city = '', street = '', house = '', flat = 1, entrance = '', floor = '', comment = '' } = action.payload
      const uniqueId = `${city}-${street}-${house}-${flat}-${entrance}-${floor}-${comment}`
      const currentAddress = state.addresses[uniqueId]

      if (!currentAddress) {
        const addressFormat = `${city} ${street} ${house}, кв. ${flat} под. ${entrance} этаж ${floor}`
        state.selectedItemId = uniqueId

        _.forEach(_.values(state.addresses), (item) => { item.selected = false })

        state.addresses = {
          ...state.addresses,
          [uniqueId]: {
            format: addressFormat,
            value: action.payload,
            selected: true
          }
        }
      }

      if (_.keys(state.addresses).length > 0) {
        state.filled = true
      } else {
        state.filled = true
      }

      saveStore(state)
    },
    removeAddress (state, action: PayloadAction<{uniqueId: string}>) {
      const { uniqueId } = action.payload
      const currentAddress = state.addresses[uniqueId]

      if (currentAddress) {
        delete state.addresses[uniqueId]
      }

      if (_.keys(state.addresses).length > 0) {
        state.filled = true
      } else {
        state.filled = true
      }

      saveStore(state)
    },
    updateAddressSelected: (state, action: PayloadAction<{uniqueId: string}>): void => {
      const { uniqueId } = action.payload

      if (state.addresses[uniqueId]) {
        state.selectedItemId = uniqueId
        _.forEach(_.values(state.addresses), (item) => { item.selected = false })
        state.addresses[uniqueId].selected = true
      }

      saveStore(state)
    },
    visibleHandle: (state, action: PayloadAction<{value: boolean}>): void => {
      state.modal.visible = action.payload.value

      saveStore(state)
    },
    openModal: (state, action: PayloadAction<{stage: number}>): void => {
      const { stage } = action.payload

      state.modal = {
        stage,
        visible: true
      }

      saveStore(state)
    },
    updateStage: (state, action: PayloadAction<{stage: number}>): void => {
      const { stage } = action.payload
      state.modal.stage = stage

      saveStore(state)
    },
    updateDeliveryPrice: (state, action: PayloadAction<{price: number}>): void => {
      const { price } = action.payload
      state.price = price

      saveStore(state)
    }
  }
})

export const { addAddress, removeAddress, visibleHandle, updateAddressSelected, openModal, updateStage, updateDeliveryPrice } = DeliveryAddressSlice.actions

export default DeliveryAddressSlice.reducer

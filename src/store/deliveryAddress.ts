import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DeliveryAddress, DeliveryAddressStore } from '../layout/types/catalog/productsDataTypes'
import _ from 'lodash'

export type DeliveryAddressState = {
  addresses: Record<string, DeliveryAddressStore>,
  selectedItemId: string,
  filled: boolean,
  modal: {
    visible: boolean,
    stage: number
  }
}

const initialState: DeliveryAddressState = {
  addresses: {},
  selectedItemId: '',
  filled: false,
  modal: {
    visible: false,
    stage: 1
  }
}

const DeliveryAddressSlice = createSlice({
  name: 'deliveryAddress',
  initialState,
  reducers: {
    addAddress (state, action: PayloadAction<DeliveryAddress>) {
      const { city = '', street = '', house = '', flat = 1, entrance = '', floor = '', comment = '' } = action.payload
      const uniqueId = `${city}-${street}-${house}-${flat}-${entrance}-${floor}-${comment}`
      const currentAddress = state.addresses[uniqueId]

      if (!currentAddress) {
        const addressFormat = `${city} ${street}, ${house} кв. ${flat} под. ${entrance} этаж ${floor}`
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
    },
    updateAddressSelected: (state, action: PayloadAction<{uniqueId: string}>): void => {
      const { uniqueId } = action.payload

      if (state.addresses[uniqueId]) {
        state.selectedItemId = uniqueId
        _.forEach(_.values(state.addresses), (item) => { item.selected = false })
        state.addresses[uniqueId].selected = true
      }
    },
    visibleHandle: (state, action: PayloadAction<{value: boolean}>): void => {
      state.modal.visible = action.payload.value
    },
    openModal: (state, action: PayloadAction<{stage: number}>): void => {
      const { stage } = action.payload

      state.modal = {
        stage,
        visible: true
      }
    },
    updateStage: (state, action: PayloadAction<{stage: number}>): void => {
      const { stage } = action.payload
      state.modal.stage = stage
    }
  }
})

export const { addAddress, removeAddress, visibleHandle, updateAddressSelected, openModal, updateStage } = DeliveryAddressSlice.actions

export default DeliveryAddressSlice.reducer

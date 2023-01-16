import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ClientAdresses } from '../layout/types/catalog/productsDataTypes'
import _ from 'lodash'

export type ClientAdressesState = {
  addresses: Record<string, ClientAdresses>,
  filled: boolean,
}

const initialState: ClientAdressesState = {
  addresses: {},
  filled: false
}

const ClientAdressesSlice = createSlice({
  name: 'clientAdresses',
  initialState,
  reducers: {
    addAddress (state, action: PayloadAction<ClientAdresses>) {
      const { city, house, flat, entrance, floor, comment = '' } = action.payload
      const uniqueId = `${city}-${house}-${flat}-${entrance}-${floor}-${comment}`
      const currentAddress = state.addresses[uniqueId]

      if (!currentAddress) {
        state.addresses = {
          ...state.addresses,
          [uniqueId]: action.payload
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
    }
  }
})

export const { addAddress, removeAddress } = ClientAdressesSlice.actions

export default ClientAdressesSlice.reducer

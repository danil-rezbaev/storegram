import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PickupAddressState = {
  selectedAddress: string,
  filled: boolean,
  price: number,
  modal: {
    visible: boolean,
  }
}

const initialState: PickupAddressState = {
  selectedAddress: '',
  filled: false,
  price: 0,
  modal: {
    visible: false
  }
}

const PickupAddressSlice = createSlice({
  name: 'PickupAddress',
  initialState,
  reducers: {
    addAddress (state, action: PayloadAction<{ address: string }>) {
      const { address } = action.payload
      state.selectedAddress = address
      state.filled = true
    },
    visibleHandle: (state, action: PayloadAction<{value: boolean}>): void => {
      state.modal.visible = action.payload.value
    },
    updatePickupPrice: (state, action: PayloadAction<{price: number}>): void => {
      const { price } = action.payload
      state.price = price
    }
  }
})

export const { addAddress, visibleHandle, updatePickupPrice } = PickupAddressSlice.actions

export default PickupAddressSlice.reducer

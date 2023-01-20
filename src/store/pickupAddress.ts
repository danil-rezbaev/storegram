import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PickupAddressState = {
  selectedAddress: string,
  filled: boolean,
  modal: {
    visible: boolean,
  }
}

const initialState: PickupAddressState = {
  selectedAddress: '',
  filled: false,
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
    }
  }
})

export const { addAddress, visibleHandle } = PickupAddressSlice.actions

export default PickupAddressSlice.reducer

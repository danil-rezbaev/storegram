import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PickupAddressState = {
  selectedAddress: string,
  filled: boolean,
  price: number,
  modal: {
    visible: boolean,
  }
}

const defaultState: PickupAddressState = {
  selectedAddress: '',
  filled: false,
  price: 0,
  modal: {
    visible: false
  }
}

function isPickupAddressState (obj: any): obj is PickupAddressState {
  if (!obj) return false

  const objAsPickupAddressState = obj as PickupAddressState
  return (objAsPickupAddressState.selectedAddress !== undefined &&
    objAsPickupAddressState.filled !== undefined &&
    objAsPickupAddressState.price !== undefined &&
    objAsPickupAddressState.modal !== undefined)
}

const initialState = isPickupAddressState(JSON.parse(localStorage.getItem('pickup') as string))
  ? JSON.parse(localStorage.getItem('pickup') as string)
  : defaultState

const saveStore = (state: PickupAddressState) => localStorage.setItem('pickup', JSON.stringify(state))

const PickupAddressSlice = createSlice({
  name: 'pickupAddress',
  initialState,
  reducers: {
    addAddress (state, action: PayloadAction<{ address: string }>) {
      const { address } = action.payload
      state.selectedAddress = address
      state.filled = true

      saveStore(state)
    },
    visibleHandle: (state, action: PayloadAction<{value: boolean}>): void => {
      state.modal.visible = action.payload.value

      saveStore(state)
    },
    updatePickupPrice: (state, action: PayloadAction<{price: number}>): void => {
      const { price } = action.payload
      state.price = price

      saveStore(state)
    }
  }
})

export const { addAddress, visibleHandle, updatePickupPrice } = PickupAddressSlice.actions

export default PickupAddressSlice.reducer

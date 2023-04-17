import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Store } from '../../layout/types/Store'
import { initialState } from './data'
import { storeApi } from './storeApi'
import { setStoreId } from './utils'

export type StoreState = {
  status: 'rejected' | 'fulfilled' | 'pending',
  data: Store
}

// @ts-ignore
const storeSlice = createSlice({
  name: 'store',
  initialState,
  extraReducers: builder => {
    builder
      .addMatcher(storeApi.endpoints.getStore.matchFulfilled, (state: StoreState, action: PayloadAction<Store>) => {
        state.status = 'fulfilled'
        state.data = action.payload
        setStoreId(action.payload._id)
      })
      .addMatcher(storeApi.endpoints.getStore.matchPending, (state: StoreState) => {
        state.status = 'pending'
      })
      .addMatcher(storeApi.endpoints.getStore.matchRejected, (state: StoreState) => {
        state.status = 'rejected'
      })
  }
})

export const selectStoreStatus = (state: StoreState) => state.status

export default storeSlice.reducer

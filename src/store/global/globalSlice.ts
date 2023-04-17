import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './data'
import { saveStore } from './utils'

export type GlobalState = {
  id: string,
  language: string,
  currency: string,
  theme: string,
  totalPrice: number
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateId (state, action: PayloadAction<Pick<GlobalState, 'id'>>) {
      state.id = action.payload.id
      saveStore(state)
    },
    updateLanguage (state, action: PayloadAction<Pick<GlobalState, 'language'>>) {
      state.language = action.payload.language
      saveStore(state)
    },
    updateCurrency (state, action: PayloadAction<Pick<GlobalState, 'currency'>>) {
      state.language = action.payload.currency
      saveStore(state)
    },
    updateTheme (state, action: PayloadAction<Pick<GlobalState, 'theme'>>) {
      state.language = action.payload.theme
      saveStore(state)
    },
    updateTotalPrice (state, action: PayloadAction<{totalPrice: number}>) {
      state.totalPrice = action.payload.totalPrice
      saveStore(state)
    }
  }
})

export const { updateId, updateLanguage, updateCurrency, updateTheme, updateTotalPrice } = globalSlice.actions

export default globalSlice.reducer

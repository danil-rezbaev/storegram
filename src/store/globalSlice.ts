import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WayGettingMethodType } from '../layout/types/catalog/productsDataTypes'

export type GlobalState = {
  language: string,
  currency: string,
  theme: string,
  wayGetting: WayGettingMethodType | null,
  totalPrice: number
}

const initialState: GlobalState = {
  language: 'ru',
  currency: '₽',
  theme: 'white',
  wayGetting: null,
  totalPrice: 0
}

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateLanguage (state, action: PayloadAction<Pick<GlobalState, 'language'>>) {
      state.language = action.payload.language
    },
    updateCurrency (state, action: PayloadAction<Pick<GlobalState, 'currency'>>) {
      state.language = action.payload.currency
    },
    updateTheme (state, action: PayloadAction<Pick<GlobalState, 'theme'>>) {
      state.language = action.payload.theme
    },
    updateWayGetting (state, action: PayloadAction<{wayGetting: WayGettingMethodType}>) {
      state.wayGetting = action.payload.wayGetting
    },
    updateTotalPrice (state, action: PayloadAction<{totalPrice: number}>) {
      state.totalPrice = action.payload.totalPrice
    }
  }
})

export const { updateLanguage, updateCurrency, updateTheme, updateWayGetting, updateTotalPrice } = globalSlice.actions

export default globalSlice.reducer

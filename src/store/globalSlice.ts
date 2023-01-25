import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { WayGettingMethodType } from '../layout/types/catalog/productsDataTypes'

export type GlobalState = {
  language: string,
  currency: string,
  theme: string,
  wayGetting: WayGettingMethodType | null,
  totalPrice: number
}

const defaultState: GlobalState = {
  language: 'ru',
  currency: '₽',
  theme: 'white',
  wayGetting: null,
  totalPrice: 0
}

function isGlobalState (obj: any): obj is GlobalState {
  if (!obj) return false

  const objAsGlobalState = obj as GlobalState
  return (objAsGlobalState.language !== undefined &&
    objAsGlobalState.currency !== undefined &&
    objAsGlobalState.theme !== undefined &&
    objAsGlobalState.wayGetting !== undefined &&
    objAsGlobalState.totalPrice !== undefined)
}

const initialState = isGlobalState(JSON.parse(localStorage.getItem('global') as string))
  ? JSON.parse(localStorage.getItem('global') as string)
  : defaultState

const saveStore = (state: GlobalState) => localStorage.setItem('global', JSON.stringify(state))

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
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
    updateWayGetting (state, action: PayloadAction<{wayGetting: WayGettingMethodType}>) {
      state.wayGetting = action.payload.wayGetting
      saveStore(state)
    },
    updateTotalPrice (state, action: PayloadAction<{totalPrice: number}>) {
      state.totalPrice = action.payload.totalPrice
      console.log('totalPrice', state.totalPrice)
      saveStore(state)
    }
  }
})

export const { updateLanguage, updateCurrency, updateTheme, updateWayGetting, updateTotalPrice } = globalSlice.actions

export default globalSlice.reducer

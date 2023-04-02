import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GlobalState = {
  id: string,
  language: string,
  currency: string,
  theme: string,
  totalPrice: number
}

const defaultState: GlobalState = {
  id: '',
  language: 'ru',
  currency: '₽',
  theme: 'white',
  totalPrice: 0
}

function isGlobalState (obj: any): obj is GlobalState {
  if (!obj) return false

  const objAsGlobalState = obj as GlobalState
  return (objAsGlobalState.language !== undefined &&
    objAsGlobalState.currency !== undefined &&
    objAsGlobalState.theme !== undefined &&
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

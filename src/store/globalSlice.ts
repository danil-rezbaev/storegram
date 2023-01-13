import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type GlobalState = {
  language: string,
  currency: string,
  theme: string,
}

const initialState: GlobalState = {
  language: 'ru',
  currency: '₽',
  theme: 'white'
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
    }
  }
})

export const { updateLanguage, updateCurrency, updateTheme } = globalSlice.actions

export default globalSlice.reducer

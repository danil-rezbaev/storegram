import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import productInfoReducer from './productInfoSlice'

const store = configureStore({
  reducer: {
    basket: basketReducer,
    productInfoSlice: productInfoReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

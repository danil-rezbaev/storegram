import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './basketSlice'
import productInfoReducer from './productInfoSlice'
import propertyQuizReducer from './propertyQuizSlice'

const store = configureStore({
  reducer: {
    basket: basketReducer,
    productInfoSlice: productInfoReducer,
    propertyQuizSlice: propertyQuizReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

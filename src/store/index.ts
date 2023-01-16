import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './globalSlice'
import basketReducer from './basketSlice'
import productInfoReducer from './productInfoSlice'
import propertyQuizReducer from './optionsQuizSlice'
import clientAdrressesReducer from './clientAdrresses'

const store = configureStore({
  reducer: {
    global: globalReducer,
    basket: basketReducer,
    productInfo: productInfoReducer,
    optionsQuiz: propertyQuizReducer,
    clientAdrresses: clientAdrressesReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

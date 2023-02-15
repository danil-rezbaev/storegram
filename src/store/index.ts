import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './globalSlice'
import basketReducer from './basketSlice'
import productInfoReducer from './productInfoSlice'
import propertyQuizReducer from './optionsQuizSlice'
import selectedOptionsReducer from './selectedOptions'

const store = configureStore({
  reducer: {
    global: globalReducer,
    basket: basketReducer,
    productInfo: productInfoReducer,
    optionsQuiz: propertyQuizReducer,
    selectedOptions: selectedOptionsReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

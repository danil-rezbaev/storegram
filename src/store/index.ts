import { configureStore } from '@reduxjs/toolkit'
import globalReducer from './globalSlice'
import basketReducer from './basketSlice'
import productInfoReducer from './productInfoSlice'
import propertyQuizReducer from './optionsQuizSlice'
import deliveryAddressReducer from './deliveryAddress'
import pickupAddressReducer from './pickupAddress'
import selectedOptionsReducer from './selectedOptions'

const store = configureStore({
  reducer: {
    global: globalReducer,
    basket: basketReducer,
    productInfo: productInfoReducer,
    optionsQuiz: propertyQuizReducer,
    deliveryAddress: deliveryAddressReducer,
    pickupAddress: pickupAddressReducer,
    selectedOptions: selectedOptionsReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

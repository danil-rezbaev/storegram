import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { api } from './api'
import globalReducer from './global/globalSlice'
import basketReducer from './basket/basketSlice'
import storeReducer from './store/storeSlice'
import productInfoReducer from './productInfo/productInfoSlice'
import propertyQuizReducer from './optionsQuiz/optionsQuizSlice'
import selectedOptionsReducer from './selectedOptions/selectedOptions'

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    global: globalReducer,
    basket: basketReducer,
    storeInfo: storeReducer,
    productInfo: productInfoReducer,
    optionsQuiz: propertyQuizReducer,
    selectedOptions: selectedOptionsReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

setupListeners(store.dispatch)

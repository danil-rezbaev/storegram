import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItem, ProductItemStore } from '../layout/types/catalog/productsDataTypes'

export type ProductInfoSlice = {
  product: ProductItem & {
    basePrice: number
  },
  visible: boolean,
}

const initialState: ProductInfoSlice = {
  product: {
    id: 0,
    img: [],
    title: 'Без названия',
    description: '',
    basePrice: 0,
    price: 0
  },
  visible: false
}

const productInfoSlice = createSlice({
  name: 'productInfoSlice',
  initialState,
  reducers: {
    openModal (state, action: PayloadAction<Omit<ProductItemStore, 'uniqueId' | 'totalPrice' | 'currentOptions' | 'count' | 'basePrice'>>) {
      state.product = { ...action.payload, basePrice: action.payload.price }
      state.visible = true
    },
    updatePrice (state, action: PayloadAction<{priceChange: number}>) {
      state.product.price = state.product.basePrice + action.payload.priceChange
    },
    visibleHandle: (state, action: PayloadAction<{value:boolean}>): void => {
      state.visible = action.payload.value
    }
  }
})

export const { openModal, visibleHandle, updatePrice } = productInfoSlice.actions

export default productInfoSlice.reducer

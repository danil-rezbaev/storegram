import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItem, ProductItemStore } from '../layout/types/catalog/productsDataTypes'

export type ProductInfoSlice = {
  product: ProductItem,
  visible: boolean,
}

const initialState: ProductInfoSlice = {
  product: {
    id: 0,
    category: 'any',
    img: [],
    title: 'Без названия',
    description: '',
    price: 0,
    options: undefined
  },
  visible: false
}

const productInfoSlice = createSlice({
  name: 'productInfoSlice',
  initialState,
  reducers: {
    openModal (state, action: PayloadAction<Omit<ProductItemStore, 'uniqueId' | 'totalPrice' | 'currentOptions' | 'count' | 'basePrice'>>) {
      state.product = action.payload
      state.visible = true
    },
    visibleHandle: (state, action: PayloadAction<{value:boolean}>): void => {
      state.visible = action.payload.value
    }
  }
})

export const { openModal, visibleHandle } = productInfoSlice.actions

export default productInfoSlice.reducer

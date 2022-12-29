import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItem, ProductItemStore } from '../layout/types/catalog/productsDataTypes'

export type ProductInfoSlice = {
  product: ProductItem,
  visible: boolean,
}

const initialState: ProductInfoSlice = {
  product: {
    id: 0,
    img: '',
    title: 'Без названия',
    description: '',
    price: 0
  },
  visible: false
}

const productInfoSlice = createSlice({
  name: 'productInfoSlice',
  initialState,
  reducers: {
    openModal (state, action: PayloadAction<ProductItemStore>) {
      state.product = action.payload
      state.visible = true
    },
    product (state, action: PayloadAction<ProductItemStore>) {
      state.product = action.payload
    },
    visibleHandle: (state, action: PayloadAction<{value:boolean}>): void => {
      state.visible = action.payload.value
    }
  }
})

export const { openModal, product, visibleHandle } = productInfoSlice.actions

export default productInfoSlice.reducer
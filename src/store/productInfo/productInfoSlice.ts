import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemStore } from '../../layout/types/catalog/productsDataTypes'
import { Product } from '../../pages/basket/BasketTypes'
import { initialState } from './data'

export type ProductInfoSlice = {
  product: Product,
  visible: boolean,
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

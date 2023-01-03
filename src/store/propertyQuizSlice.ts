import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemOptions } from '../layout/types/catalog/productsDataTypes'

export type ProductInfoSlice = {
  questions: ProductItemOptions[],
  visible: boolean,
  filled: boolean,
  productId: number,
  index: number,
  length: number
}

const initialState: ProductInfoSlice = {
  questions: [],
  visible: false,
  filled: false,
  productId: 0,
  index: 0,
  length: 0
}

const propertyQuizSlice = createSlice({
  name: 'propertyQuizSlice',
  initialState,
  reducers: {
    openModal (state, action: PayloadAction<{options: ProductItemOptions[], productId: number, index: number, length: number }>) {
      state.questions = action.payload.options
      state.productId = action.payload.productId
      state.visible = true
      state.index = action.payload.index
      state.length = action.payload.length
    },
    questions (state, action: PayloadAction<ProductItemOptions[]>) {
      state.questions = action.payload
    },
    visibleHandle: (state, action: PayloadAction<{value:boolean}>): void => {
      state.visible = action.payload.value
    },
    setFilled (state, action: PayloadAction<{filled: boolean}>) {
      state.filled = action.payload.filled
    }
  }
})

export const { openModal, questions, visibleHandle, setFilled } = propertyQuizSlice.actions

export default propertyQuizSlice.reducer

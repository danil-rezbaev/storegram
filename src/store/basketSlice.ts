import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { ProductItemStore } from '../layout/types/catalog/productsDataTypes'

export type BasketState = {
  products: Record<string, ProductItemStore>,
  amount: number,
  quantity: number
}

const initialState: BasketState = {
  products: {},
  amount: 0,
  quantity: 0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action: PayloadAction<ProductItemStore>) {
      const currentProduct = state.products[action.payload.id]

      if (currentProduct?.count) {
        currentProduct.count++
        currentProduct.totalPrice = currentProduct.count * currentProduct.price
      } else {
        state.products[action.payload.id] = action.payload
      }

      const productsValues = _.values(state.products)
      state.quantity = _.reduce(productsValues, (accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = _.reduce(productsValues, (accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    removeProduct (state, action: PayloadAction<ProductItemStore>) {
      const currentProduct = state.products[action.payload.id]

      if (!currentProduct) {
        throw new Error("product doesn't exist")
      } else if (typeof currentProduct.count === 'undefined') {
        throw new Error("count doesn't exist")
      }

      if (currentProduct.count > 0) {
        currentProduct.count--
      } else if (currentProduct.count === 0) {
        delete state.products[action.payload.id]
      }

      const productsValues = _.values(state.products)

      currentProduct.totalPrice = currentProduct.count * currentProduct.price
      state.quantity = productsValues.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = productsValues.reduce((accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    addOptions (state, action) {
      const { productId, questionTitle, checkList } = action.payload
      const currentProduct = state.products[productId]

      if (!currentProduct) {
        return
      }

      if (currentProduct.currentOptions?.[questionTitle]) {
        currentProduct.currentOptions[questionTitle] = [...currentProduct.currentOptions[questionTitle], ...checkList]
      } else if (currentProduct.currentOptions) {
        currentProduct.currentOptions[questionTitle] = checkList
      }
    },
    clearBasket (state) {
      state.products = {}
    }
  }
})

export const { addProduct, removeProduct, clearBasket, addOptions } = basketSlice.actions

export default basketSlice.reducer

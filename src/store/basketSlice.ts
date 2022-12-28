import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { ProductItemStore } from '../layout/types/catalog/productsDataTypes'

export type BasketState = {
  products: ProductItemStore[],
  amount: number,
  quantity: number
}

const initialState: BasketState = {
  products: [],
  amount: 0,
  quantity: 0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action: PayloadAction<ProductItemStore>) {
      const currentProduct = state.products.find((product) => {
        return product.id === action.payload.id
      })

      if (currentProduct?.count) {
        currentProduct.count++
        currentProduct.totalPrice = currentProduct.count * currentProduct.price
      } else {
        state.products.push(action.payload)
      }

      state.quantity = state.products.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = state.products.reduce((accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    removeProduct (state, action: PayloadAction<ProductItemStore>) {
      const currentProduct = state.products.find((product) => {
        return product.id === action.payload.id
      })

      let copyProducts = state.products

      if (!currentProduct) {
        throw new Error("product doesn't exist")
      } else if (typeof currentProduct.count === 'undefined') {
        throw new Error("count doesn't exist")
      }

      if (currentProduct.count > 0) {
        currentProduct.count--
      } else if (currentProduct.count === 0) {
        copyProducts = _.filter(state.products, (product) => product.id !== action.payload.id)
      }

      currentProduct.totalPrice = currentProduct.count * currentProduct.price

      state.products = copyProducts
      state.quantity = copyProducts.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = copyProducts.reduce((accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    addProperties (state, action) {
      const { productId, questionTitle, checkList } = action.payload

      const currentProduct = state.products.find((product) => {
        return product.id === productId
      })

      if (!currentProduct) {
        return
      }

      if (currentProduct.currentProperties?.[questionTitle]) {
        currentProduct.currentProperties[questionTitle] = [...currentProduct.currentProperties[questionTitle], ...checkList]
      } else if (currentProduct.currentProperties) {
        currentProduct.currentProperties[questionTitle] = checkList
      }

      console.log('currentProduct', currentProduct)
    },
    clearBasket (state) {
      state.products = []
    }
  }
})

export const { addProduct, removeProduct, clearBasket, addProperties } = basketSlice.actions

export default basketSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { ProductCardProps } from '../pages/catalog/components/ProductCard'

export type BasketState = {
  products: ProductCardProps[],
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
    addProduct: function (state, action: PayloadAction<ProductCardProps>) {
      const currentProduct = state.products.find((product) => {
        return product.title === action.payload.title
      })

      if (currentProduct && currentProduct.count) {
        currentProduct.count++
      } else {
        state.products.push(action.payload)
      }

      state.quantity = state.products.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = state.products.reduce((accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    removeProduct (state, action: PayloadAction<ProductCardProps>) {
      const currentProduct = state.products.find((product) => {
        return product.title === action.payload.title
      })

      let copyProducts = state.products

      if (!currentProduct) {
        throw new Error("product doesn't exist")
      } else if (typeof currentProduct.count === 'undefined') {
        throw new Error("count doesn't exist")
      }

      console.log('state.products.length', state.products.length)

      if (currentProduct.count > 0) {
        currentProduct.count--
      }
      if (currentProduct.count === 0) {
        copyProducts = _.filter(state.products, (product) => product.title !== action.payload.title)
      }

      console.log('copyProducts', copyProducts)

      state.quantity = copyProducts.reduce((accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = copyProducts.reduce((accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    clearBasket (state) {
      state.products = []
    }
  }
})

export const { addProduct, removeProduct, clearBasket } = basketSlice.actions

export default basketSlice.reducer

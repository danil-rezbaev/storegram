import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { ProductItemStore } from '../layout/types/catalog/productsDataTypes'

export type BasketState = {
  products: Record<string, ProductItemStore>,
  productsProperties: Record<number, Record<'count' | 'totalPrice', number>>,
  amount: number,
  quantity: number
}

const initialState: BasketState = {
  products: {},
  productsProperties: {},
  amount: 0,
  quantity: 0
}

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action: PayloadAction<Omit<ProductItemStore, 'uniqueId' | 'totalPrice' | 'count'>>) {
      const { id, currentOptions = {}, price } = action.payload

      const uniqueId = _.entries(currentOptions).length > 0
        ? _.reduce(_.entries(currentOptions), (accum, [title, values]) => {
          return accum += `${id}-${title}:[${_.map(values, (item) => item.id).join()}]-`
        }, '')
        : id.toString()

      const currentProduct = state.products[uniqueId]

      if (currentProduct?.count) {
        currentProduct.count++
        currentProduct.totalPrice = currentProduct.count * currentProduct.price
      } else {
        state.products[uniqueId] = { ...action.payload, count: 1, uniqueId, totalPrice: price }
      }

      if (state.productsProperties[id]) {
        state.productsProperties[id].count++
        state.productsProperties[id].totalPrice = state.productsProperties[id].count * price
      } else {
        state.productsProperties = {
          ...state.productsProperties,
          [id]: {
            count: 1,
            totalPrice: price
          }
        }
      }

      const productsValues = _.values(state.products)
      state.quantity = _.reduce(productsValues, (accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = _.reduce(productsValues, (accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    removeProduct (state, action: PayloadAction<{id: number, uniqueId?: string}>) {
      const { id, uniqueId } = action.payload

      if (uniqueId) {
        const currentProduct = state.products[uniqueId]

        if (currentProduct.count > 1) {
          currentProduct.count--

          state.productsProperties[id].totalPrice = state.productsProperties[id].count * currentProduct.price
        } else if (currentProduct.count === 1) {
          delete state.products[uniqueId]
        }

        currentProduct.totalPrice = currentProduct.count * currentProduct.price
        currentProduct.totalPrice = currentProduct.count * currentProduct.price
      } else {
        const pattern = '\\b' + id + '\\b'
        const findItems = _.filter(_.keys(state.products), (item) => new RegExp(pattern, 'g').test(item))
        const getLastFoundItem = findItems ? findItems[findItems.length - 1] : undefined

        if (getLastFoundItem) {
          const currentProduct = state.products[getLastFoundItem]

          if (currentProduct.count > 1) {
            currentProduct.count--
            state.productsProperties[id].totalPrice = state.productsProperties[id].count * currentProduct.price
          } else if (currentProduct.count === 1) {
            delete state.products[getLastFoundItem]
          }

          currentProduct.totalPrice = currentProduct.count * currentProduct.price
          currentProduct.totalPrice = currentProduct.count * currentProduct.price
        }
      }

      if (state.productsProperties[id].count > 1) {
        state.productsProperties[id].count--
      } else if (state.productsProperties[id].count === 1) {
        delete state.productsProperties[id]
      }

      const productsValues = _.values(state.products)
      state.quantity = _.reduce(productsValues, (accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = _.reduce(productsValues, (accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
    },
    addOptions (state, action) {
      const { productId, checkList, questionTitle = 'Свойства' } = action.payload
      const currentProduct = state.products[productId]

      if (currentProduct.currentOptions) {
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

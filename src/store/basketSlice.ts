import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import {
  ProductItemOptionsValue,
  ProductItemStore,
  TotalProductProperties
} from '../layout/types/catalog/productsDataTypes'

export type BasketState = {
  products: Record<string, ProductItemStore>,
  totalProductProperties: Record<string, TotalProductProperties>,
  amount: number,
  quantity: number
}

const defaultState: BasketState = {
  products: {},
  totalProductProperties: {},
  amount: 0,
  quantity: 0
}

function isBasketState (obj: any): obj is BasketState {
  if (!obj) return false

  const objAsBasketState = obj as BasketState
  return (objAsBasketState.products !== undefined &&
          objAsBasketState.totalProductProperties !== undefined &&
          objAsBasketState.amount !== undefined &&
          objAsBasketState.quantity !== undefined)
}

const initialState = isBasketState(JSON.parse(localStorage.getItem('basket') as string))
  ? JSON.parse(localStorage.getItem('basket') as string)
  : defaultState

const saveStore = (state: BasketState) => localStorage.setItem('basket', JSON.stringify(state))

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addProduct (state, action: PayloadAction<Omit<ProductItemStore, 'uniqueId' | 'totalPrice'>>) {
      const { _id, price, currentOptions = {}, count } = action.payload

      const fn = () => {
        const currentProductProperties = state.totalProductProperties[_id]
        const uniqueId = currentProductProperties ? currentProductProperties.uniqueId : _id.toString()

        if (currentProductProperties) {
          currentProductProperties.count += 1
          currentProductProperties.totalPrice += price
        } else {
          state.totalProductProperties = {
            ...state.totalProductProperties,
            [_id]: { ...action.payload, count: 1, uniqueId, basePrice: price, price, totalPrice: price }
          }
        }

        const currentProduct = state.products[uniqueId]

        if (currentProduct) {
          currentProduct.count += 1
          currentProduct.totalPrice += +currentProduct.price
          currentProduct.currentOptions = currentOptions
        } else {
          state.products[uniqueId] = {
            ...action.payload,
            count: 1,
            uniqueId,
            price,
            totalPrice: price,
            currentOptions
          }
        }

        const productsValues = _.values(state.products)
        state.quantity = _.reduce(productsValues, (accum, item) => accum += (item.count ? item.count : 0), 0)
        state.amount = _.reduce(productsValues, (accum, item) => accum += item.price * (item.count ? item.count : 0), 0)
      }

      if (count) {
        let counter = count
        while (counter) {
          fn()
          counter--
        }
      } else {
        fn()
      }

      saveStore(state)
    },
    removeProduct (state, action: PayloadAction<{id: string, uniqueId?: string}>) {
      const { id, uniqueId } = action.payload

      if (uniqueId) {
        const currentProduct = state.products[uniqueId]

        if (currentProduct) {
          currentProduct.count -= 1
          currentProduct.totalPrice -= currentProduct.price
        }
      } else {
        const pattern = '\\b' + id + '\\b'
        const findItems = _.filter(_.keys(state.products), (item) => new RegExp(pattern, 'g').test(item))
        const findItemsLast = findItems ? _.last(findItems) : undefined
        const currentProduct = findItemsLast ? state.products[findItemsLast] : undefined

        if (findItemsLast && currentProduct) {
          currentProduct.count -= 1
          currentProduct.totalPrice -= currentProduct.price
        }
      }

      const currentProductProperties = state.totalProductProperties[id]

      if (currentProductProperties) {
        state.totalProductProperties[id].count -= 1
        state.totalProductProperties[id].totalPrice -= state.totalProductProperties[id].price
      }

      const productsValues = _.values(state.products)
      state.quantity = _.reduce(productsValues, (accum, item) => accum += (item.count ? item.count : 0), 0)
      state.amount = _.reduce(productsValues, (accum, item) => accum += item.price * (item.count ? item.count : 0), 0)

      saveStore(state)
    },
    updateChecklist (state, action: PayloadAction<{productId: number, questionTitle: string, checkList: ProductItemOptionsValue[], price: number}>) {
      const { productId, checkList, questionTitle = 'Свойства', price } = action.payload

      if (checkList.length === 0) {
        return
      }

      const currentProduct = state.totalProductProperties[productId]

      const currentSelectedOptions: Record<string, ProductItemOptionsValue[]> = currentProduct
        ? { ...currentProduct.selectedOptions, [questionTitle]: checkList }
        : { [questionTitle]: checkList }

      if (currentProduct?.selectedOptions) {
        currentProduct.selectedOptions[questionTitle] = checkList
      }

      const uniqueId = _.entries(currentSelectedOptions).length > 0
        ? _.reduce(_.entries(currentSelectedOptions), (accum, [title, values]) => {
          return accum += `${productId}-${title}:[${_.map(values, (item) => item.id).join()}]-`
        }, '')
        : productId.toString()

      const priceChange = _.reduce(_.values(currentSelectedOptions), (accum, values) => {
        return accum += _.reduce(values, (accum1, item) => accum1 += item.priceChange, 0)
      }, 0)

      const finallyPrice = priceChange !== 0 ? price + priceChange : price

      if (currentProduct) {
        state.totalProductProperties[productId].price = finallyPrice
        state.totalProductProperties[productId].selectedOptions = currentSelectedOptions
        state.totalProductProperties[productId].uniqueId = uniqueId
      } else {
        state.totalProductProperties[productId] = {
          count: 0,
          price: finallyPrice,
          basePrice: price,
          totalPrice: 0,
          selectedOptions: currentSelectedOptions,
          uniqueId
        }
      }

      saveStore(state)
    },
    clearBasket (state) {
      state.products = {}
      saveStore(state)
    }
  }
})

export const { addProduct, removeProduct, clearBasket, updateChecklist } = basketSlice.actions

export default basketSlice.reducer

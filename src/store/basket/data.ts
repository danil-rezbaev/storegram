import { isBasketState } from './utils'

export const initialData = {
  products: {},
  totalProductProperties: {},
  amount: 0,
  quantity: 0
}

export const initialState = isBasketState(JSON.parse(localStorage.getItem('basket') as string))
  ? JSON.parse(localStorage.getItem('basket') as string)
  : initialData

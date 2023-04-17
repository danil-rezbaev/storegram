import { BasketState } from './basketSlice'

export const isBasketState = (obj: any): obj is BasketState => {
  if (!obj) return false

  const objAsBasketState = obj as BasketState
  return (objAsBasketState.products !== undefined &&
    objAsBasketState.totalProductProperties !== undefined &&
    objAsBasketState.amount !== undefined &&
    objAsBasketState.quantity !== undefined)
}

export const saveStore = (state: BasketState) => localStorage.setItem('basket', JSON.stringify(state))

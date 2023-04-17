import { GlobalState } from './globalSlice'
import { isGlobalState } from './utils'

const defaultState: GlobalState = {
  id: '',
  language: 'ru',
  currency: '₽',
  theme: 'white',
  totalPrice: 0
}

export const initialState = isGlobalState(JSON.parse(localStorage.getItem('global') as string))
  ? JSON.parse(localStorage.getItem('global') as string)
  : defaultState

import { StoreState } from './storeSlice'

const data = {
  _id: localStorage.getItem('storeid') ?? '',
  title: '',
  products: [],
  currency: 'rub',
  categories: []
}

export const initialState: StoreState = {
  status: 'pending',
  data
}

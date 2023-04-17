import { ProductInfoSlice } from './productInfoSlice'

export const initialState: ProductInfoSlice = {
  product: {
    _id: '',
    category: 'any',
    images: [],
    title: 'Без названия',
    description: '',
    price: 0,
    options: []
  },
  visible: false
}

import { ProductInfoSlice } from './optionsQuizSlice'

export const initialState: ProductInfoSlice = {
  questions: [],
  selectedOptions: {},
  visible: false,
  productId: 0,
  questionCounter: 0,
  questionLength: 0
}

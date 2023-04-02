import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductItemOptions, ProductItemOptionsValue } from '../layout/types/catalog/productsDataTypes'
import _ from 'lodash'

export type ProductInfoSlice = {
  questions: ProductItemOptions[],
  selectedOptions: Record<string, Record<string, ProductItemOptionsValue[]>>,
  visible: boolean,
  productId: number,
  questionCounter: number,
  questionLength: number
}

const initialState: ProductInfoSlice = {
  questions: [],
  selectedOptions: {},
  visible: false,
  productId: 0,
  questionCounter: 0,
  questionLength: 0
}

const optionsQuizSlice = createSlice({
  name: 'optionsQuizSlice',
  initialState,
  reducers: {
    openModal (state, action: PayloadAction<Omit<ProductInfoSlice, 'filled' | 'visible' | 'selectedOptions'>>) {
      const { questions, productId, questionCounter, questionLength } = action.payload

      state.questions = questions
      state.productId = productId
      state.questionCounter = questionCounter
      state.questionLength = questionLength

      state.visible = true
    },
    visibleHandle: (state, action: PayloadAction<Pick<ProductInfoSlice, 'visible'>>): void => {
      state.visible = action.payload.visible
    },
    setCounter (state, action: PayloadAction<Pick<ProductInfoSlice, 'questionCounter'>>) {
      state.questionCounter = action.payload.questionCounter
    },
    addOptions (state, action: PayloadAction<{id: string, productId: number, checkList: ProductItemOptionsValue[] | undefined, questionTitle: string}>) {
      const { id, productId, checkList, questionTitle } = action.payload
      const currentOption = _.find(state.questions, (item) => (item.id === id))

      if (!checkList || !currentOption) {
        return
      }

      if (checkList.length > 0) {
        state.selectedOptions[productId] = { ...state.selectedOptions[productId], [questionTitle]: checkList }
        currentOption.filled = true
      } else if (checkList.length === 0 && state.selectedOptions[productId][questionTitle]) {
        currentOption.filled = false
        delete state.selectedOptions[productId][questionTitle]
      }
    }
  }
})

export const { openModal, visibleHandle, setCounter, addOptions } = optionsQuizSlice.actions

export default optionsQuizSlice.reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrentOptions, SelectedOptions } from '../layout/types/catalog/productsDataTypes'

export type SelectedOptionsType = {
  options: SelectedOptions,
  filled: boolean
}

const initialState: SelectedOptionsType = {
  options: {},
  filled: false
}

// function isBasketState (obj: any): obj is SelectedOptions {
//   if (!obj) return false
//
//   const objAsBasketState = obj as SelectedOptionsType
//   return (objAsBasketState.filled !== undefined)
// }
//
// const initialState = isBasketState(JSON.parse(localStorage.getItem('selectedOptions') as string))
//   ? JSON.parse(localStorage.getItem('selectedOptions') as string)
//   : defaultState

const saveStore = (state: SelectedOptionsType) => localStorage.setItem('basket', JSON.stringify(state))

const selectedOptions = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    updateOptions (state, action: PayloadAction<{id: number, uniqueId: string, options: CurrentOptions, type: 'increment' | 'decrement'}>) {
      const { id, options, uniqueId, type } = action.payload

      if (state.options[id] && state.options[id][uniqueId]) {
        const currentOptions = state.options[id][uniqueId]

        // console.log('currentOptions', currentOptions)

        if (currentOptions?.count === 1) {
          if (type === 'increment') {
            currentOptions.count += 2
          }
          if (type === 'decrement') {
            currentOptions.count = 1
          }
        }

        if (currentOptions.count > 1) {
          if (type === 'increment') {
            currentOptions.count += 1
          }

          if (type === 'decrement') {
            currentOptions.count -= 1
          }
        }
      } else {
        state.options = {
          ...state.options,
          [id]: {
            [uniqueId]: {
              ...options,
              count: 2
            }
          }
        }
      }

      console.log('store', state.options[id])

      saveStore(state)
    },
    clearOptions (state) {
      state.options = {}
      saveStore(state)
    }
  }
})

export const { updateOptions, clearOptions } = selectedOptions.actions

export default selectedOptions.reducer

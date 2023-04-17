import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrentOptions, SelectedOptions } from '../../layout/types/catalog/productsDataTypes'
import { saveStore } from './utils'
import { initialState } from './data'

export type SelectedOptionsType = {
  options: SelectedOptions,
  filled: boolean
}

const selectedOptions = createSlice({
  name: 'selectedOptions',
  initialState,
  reducers: {
    updateOptions (state, action: PayloadAction<{id: number, uniqueId: string, options: CurrentOptions, type: 'increment' | 'decrement'}>) {
      const { id, options, uniqueId, type } = action.payload

      if (state.options[id] && state.options[id][uniqueId]) {
        const currentOptions = state.options[id][uniqueId]

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

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from '../axios'
import { Store } from '../layout/types/Store'

export const fetchGetStore = createAsyncThunk('store', async (params: {id: string}) => {
  const { id } = params
  const { data } = await axios.get(`/store/${id}`)
  return data
})

export type StoreState = {
  status: boolean,
  data: Store
}

const initialState: StoreState = {
  status: false,
  data: {
    _id: localStorage.getItem('storeid') ?? '',
    title: '',
    products: [],
    currency: 'rub',
    categories: []
  }
}

// @ts-ignore
const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    updateStore: (state, action: PayloadAction<Store>): void => {
      state.data = action.payload
      state.status = true
      localStorage.setItem('storeid', action.payload._id)
    }
  },
  extraReducers: {
    // @ts-ignore
    [fetchGetStore.pending]: (state) => {
      console.log('отправка запроса')
    },
    // @ts-ignore
    [fetchGetStore.rejected]: (state) => {
      console.log('ошибка запроса')
    },
    // @ts-ignore
    [fetchGetStore.fulfilled]: (state: typeof initialState, action: PayloadAction<Store>) => {
      state.data = action.payload
      state.status = true
      localStorage.setItem('storeid', action.payload._id)
    }
  }
})

export const { updateStore } = storeSlice.actions

export default storeSlice.reducer

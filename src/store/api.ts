import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { SERVER_URL } from '../const'

// const API_HOST = process.env.REACT_APP_API_HOST

const baseQuery = fetchBaseQuery({
  baseUrl: `${SERVER_URL}/`
})

export const api = createApi({
  reducerPath: 'baseApi',
  baseQuery,
  tagTypes: ['store'],
  endpoints: () => ({})
})

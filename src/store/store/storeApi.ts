import { api } from '../api'
import { Store } from '../../layout/types/Store'

// export interface GetStoreResponse = Store

export const storeApi = api.injectEndpoints({
  endpoints: build => ({
    getStore: build.mutation<Store, unknown>({
      query (id: string) {
        return {
          url: `store/${id}`,
          method: 'GET'
        }
      }
    })
  })
})

export const {
  useGetStoreMutation
} = storeApi

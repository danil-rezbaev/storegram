import axios from 'axios'
import { REACT_APP_SERVER_URL } from './const'

const instance = axios.create({
  baseURL: REACT_APP_SERVER_URL
})

instance.interceptors.request.use((config) => {
  config.headers.storeid = window.localStorage.getItem('storeid')
  return config
})

export default instance

import axios from 'axios'
import { SERVER_URL } from './const'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || SERVER_URL
})

instance.interceptors.request.use((config) => {
  config.headers.storeid = window.localStorage.getItem('storeid')
  return config
})

export default instance

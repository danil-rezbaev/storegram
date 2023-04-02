import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://typper.online'
})

instance.interceptors.request.use((config) => {
  config.headers.storeid = window.localStorage.getItem('storeid')
  return config
})

export default instance

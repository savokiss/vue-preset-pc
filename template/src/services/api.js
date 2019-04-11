import axios from 'axios'
import { getToken } from './auth/utils'
import config from '@/config'

// 创建axios实例
const api = axios.create({
  baseURL: config.API_URL, // 后台 api 的 url
  timeout: config.API_TIMEOUT, // 请求超时时间
  validateStatus: function (status) {
    return status < 500 // Reject only if the status code is greater than or equal to 500
  }
})

api.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers['Authorization'] = getToken()
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Do something with response data
    if (response.data.status_code === 200) {
      response.data.ok = true
    } else {
      console.error('error')
    }
    return response.data
  },
  function (error) {
    error.request && error.request.readyState === 4 && console.error('network error')
    // Do something with response error
    return Promise.reject(error)
  }
)

export default api

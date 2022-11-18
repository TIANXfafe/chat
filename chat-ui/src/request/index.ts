import axios, { AxiosRequestConfig } from "axios";
//引入qs模块，用来序列化post类型的数据
import Qs from 'qs';
// import {errorMsg, handleCommonError, handleNoCommontError} from "./errorHandle";
import {errorMsg, handleNoCommontError} from "./errorHandle";
import { getSessionStorage } from "../utils/storage";

type requestOptions = AxiosRequestConfig & {
  url: string
  noLoading?: boolean
  body?: any
  headers?: any
}

const baseURL = '/api';
// const timeout = 5000;

//设置axios基础路径
// const service = axios.create({
//   baseURL,
//   timeout
// })

// 拦截器
axios.interceptors.response.use(
  // 响应拦截
  (response: any) => {
    // toogleLoading(false)
    if (response.status === 200) {
      return response.data
    }
  },
  // 错误拦截
  (error) => {
    const { response } = error
    // toogleLoading(false)
    // 请求有响应
    if (response) {
      const { status, data } = response;
      if (status === 400 || status === 401) {
        // handleCommonError(data, config)
        return Promise.reject(data.data)
      }
      handleNoCommontError(errorMsg)
      return Promise.reject(errorMsg)
    }
    // 请求超时
    if (error.code === 408) {
      const timeoutMsg = '请求超时，请稍后再试'
      handleNoCommontError(timeoutMsg)
      return Promise.reject(timeoutMsg)
    }
    const networkErrorMsg = '您的网络出现问题，请检查网络重试'
    handleNoCommontError(networkErrorMsg)
    return Promise.reject(networkErrorMsg)
  }
)

// request
export default async function request(options: requestOptions) {
  const { url } = options
  // @ts-ignore
  delete options.url

  const token = getSessionStorage('userToken')
  // const Authorization = getLocalStorage(authKey)
  let headers = {}
  if (options) {
    headers = options.headers || {}
  }
  if (token) {
    headers = {...headers, token};
  }
  const defaultOptions = {
    headers: {
      ...headers
    },
    credentials: 'include',
    timeout: 10000,
    withCredentials: true,
    validateStatus(status: any) {
      return status >= 200 && status < 300
    }
  }
  if (options) {
    delete options.headers
  }
  const newOptions: requestOptions = { ...defaultOptions, ...options }
  newOptions.data = newOptions.body || {}
  if (newOptions.method === 'get') {
    (newOptions.paramsSerializer as any) = {
      serialize: (params: any) => {
        return Qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
  }
  delete newOptions.body
  // toogleLoading(true)
  const newUrl = baseURL + url
  return axios(newUrl, newOptions)
}

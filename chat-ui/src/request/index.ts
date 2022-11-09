import axios from "axios";
//引入qs模块，用来序列化post类型的数据
import Qs from 'qs';

const baseURL = '/api';
const timeout = 5000;

//设置axios基础路径
const service = axios.create({
  baseURL,
  timeout
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 每次发送请求之前本地存储中是否存在token，也可以通过Redux这里只演示通过本地拿到token
  // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
  const token = window.localStorage.getItem('userToken') || window.sessionStorage.getItem('userToken');
  //设置请求头
  if ( config.url === "/register" ||  config.url === "/login") {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
    }
  } else {
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
      token
    }
  }
  config.data = Qs.stringify(config.data)
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use(response => {
  //根据返回不同的状态码做不同的事情
  // 这里一定要和后台开发人员协商好统一的错误状态码
  console.log('response1', response)
  // if ((response as any).code) {
  //   console.log('response2', response)
  //   switch ((response as any).code) {
  //     case 200:
  //       return response.data;
  //     case 401:
  //       //未登录处理方法
  //       break;
  //     case 403:
  //       //token过期处理方法
  //       break;
  //     default:
  //       console.log('response.data.msg', response.data.msg);
  //   }
  // } else {
  //   return response;
  // }
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data)
  }
}, error => {
  if (error.response.status) {
    switch (error.response.status) {
      case 400:
        console.log('error.response.data.data', error.response.data.data);
        break;
      default:
        console.log('default');
        break;
    }
  }
  return Promise.reject(error)
})
//最后把封装好的axios导出
export default service
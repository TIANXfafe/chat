import request from "./index";

// 注册
export const register = (data: any) => request({
  url: '/register',
  method: 'post',
  body: data
})
// 登录
export const login = (data: any) => request({
  url: '/login',
  method: 'post',
  body: data
})
// 退出登录
export const logout = () => request({
  url: '/logout',
  method: 'post'
})
// 获取用户信息
export const fetchUserInfo = () => request({
  url: '/fetchUserInfo',
  method: 'post'
})
// 修改用户信息
export const changeInfo = (data: any) => request({
  url: '/changeInfo',
  method: 'post',
  body: data
})

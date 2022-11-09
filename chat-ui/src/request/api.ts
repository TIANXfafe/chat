import service from "./index";

// 注册
export const register = (data: any) => service.post('/register', data);
// 登录
export const login = (data: any) => service.post('/login', data);
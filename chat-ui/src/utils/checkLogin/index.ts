import {getLocalStorage} from "../storage";

const checkLogin = () => {
  const endTime = new Date().getTime();
  const startTime = getLocalStorage('loginTime') || endTime;
  const token = getLocalStorage('userToken');
  // @ts-ignore
  return token && endTime - startTime <= 24 * 60 * 60 * 1000 && endTime - startTime > 0;
};

export default checkLogin;

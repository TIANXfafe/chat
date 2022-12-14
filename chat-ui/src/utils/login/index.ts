import {login} from "../../request/api";
import {setSessionStorage} from "../storage";
import toast from "react-hot-toast";

type LoginForm = {
  username: string;
  password: string;
}

const handleLogin = async (data: LoginForm) => {
  try {
    const result: any = await login(data);
    console.log('res', result)
    if (result.msg === 'ok') {
      const {token} = result.data;
      const userInfo = JSON.parse(JSON.stringify(result.data));
      const loginTime = (new Date()).getTime();
      delete userInfo.token;
      delete userInfo.created_at;
      delete userInfo.updated_at;
      setSessionStorage('userToken', token);
      setSessionStorage('userInfo', JSON.stringify(userInfo));
      setSessionStorage('loginTime', JSON.stringify(loginTime));
      return true
    }
  } catch (err) {
    console.log('err', err)
    toast.error((err as string));
    return false;
  }
}

export default handleLogin;

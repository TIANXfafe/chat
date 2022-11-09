import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from "../LoginForm/index.module.less";
import Input from "../Input";
import {register, login} from "../../request/api";

const Index = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repassword: ""
  });

  // 提交表单事件
  const handleRegister = async (e: Event) => {
    e.preventDefault();
    const result: any = await register(formData);
    console.log('result', result)
    if (result.msg === 'ok') {
      handleLogin();
    } else {
      console.log('出错啦!');
    }
  }
  const handleLogin = async () => {
    const {username, password} = formData;
    const data = {username, password};
    const result: any = await login(data);
    console.log('result2', result);
    if (result.msg === 'ok') {
      const {token} = result.data;
      const userInfo = JSON.parse(JSON.stringify(result.data));
      delete userInfo.token;
      delete userInfo.created_at;
      delete userInfo.updated_at;
      window.localStorage.setItem('userToken', token);
      window.localStorage.setItem('userInfo', JSON.stringify(userInfo));
      window.sessionStorage.setItem('userToken', token);
      window.sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      navigator("/");
    }
  }
  // input输入框改变事件
  const handleInput = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <form className={styles.form} onSubmit={(e) => handleRegister(e as any)} >
      <Input
        label="账号"
        name="username"
        onChange={(e) => handleInput(e)}
      />
      <Input
        type="password"
        label="密码"
        name="password"
        onChange={(e) => handleInput(e)}
      />
      <Input
        type="password"
        label="确认密码"
        name="repassword"
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className={styles.btn}>注册</button>
    </form>
  );
};

export default Index;
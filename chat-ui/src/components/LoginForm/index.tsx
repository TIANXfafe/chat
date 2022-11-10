import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './index.module.less';
import Input from '../Input';
import handleLogin from "../../utils/login";
import toast from "react-hot-toast";

const Index = () => {
  const navigator = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const submit = async (e: any) => {
    e.preventDefault();
    const res = await handleLogin(formData);
    if (res) {
      toast.success('登录成功!');
      navigator('/');
    }
  }

  // input输入框改变事件
  const handleInput = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (
    <form
      className={styles.form}
      onSubmit={(e) => submit(e as any)}
    >
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
      <button type="submit" className={styles.btn}>登录</button>
    </form>
  );
};

export default Index;

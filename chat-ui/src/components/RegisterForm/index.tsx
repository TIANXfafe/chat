import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
import {register} from "../../request/api";
import Input from "../Input";
import styles from "../LoginForm/index.module.less";
import handleLogin from '../../utils/login';

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
    try {
      const result: any = await register(formData);
      if (result.msg === 'ok') {
        toast.success('注册成功，跳转中..');
        const loginRes = await handleLogin({
          username: formData.username,
          password: formData.password
        });
        if (loginRes) {
          navigator("/");
        } else {
          toast.error('登录失败!');
        }
      } else {
        toast.error(result.data);
      }
    } catch (err) {
      toast.error((err as string));
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

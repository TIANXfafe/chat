import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './index.module.less';
import Input from '../Input';

const Index = () => {
  const navigator = useNavigate();

  const handleLogin = () => {
    const loginTime = new Date();
    localStorage.setItem('loginTime', String(loginTime.getTime()));
    navigator("/");
  }

  return (
    <form className={styles.form}>
      <Input label="账号" />
      <Input type="password" label="密码" />
      <button onClick={handleLogin} className={styles.btn}>登录</button>
    </form>
  );
};

export default Index;
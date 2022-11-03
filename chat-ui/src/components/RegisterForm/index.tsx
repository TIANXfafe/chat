import React from 'react';
import styles from "../LoginForm/index.module.less";
import Input from "../Input";

const Index = () => {
  const handleRegister = () => {

  }

  return (
    <form className={styles.form}>
      <Input label="账号" />
      <Input type="password" label="密码" />
      <Input type="password" label="确认密码" />
      <button onClick={handleRegister} className={styles.btn}>注册</button>
    </form>
  );
};

export default Index;
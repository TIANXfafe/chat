import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './index.module.less';

const Index = () => {
  const navigator = useNavigate();

  const [beforeStyle, setBeforeStyle] = useState({});

  const handleLogin = () => {
    const loginTime = new Date();
    localStorage.setItem('loginTime', String(loginTime.getTime()));
    navigator("/");
  }

  const handleFocus = () => {
    setBeforeStyle({top: '-10px', left: '8px'})
  }

  const handleBlur = () => {
    setBeforeStyle({top: '8px', left: '20px'})
  }

  return (
    <form className={styles.form}>
      <div className={styles.inputContainer}>
        <span className={styles.before} style={beforeStyle}>账号</span>
        <input type="text" className={styles.input} onFocus={handleFocus} onBlur={handleBlur} />
        <span className={styles.after}>请输入账号</span>
      </div>
      <div className={styles.inputContainer}>
        <span className={styles.before}>密码</span>
        <input type="password" className={styles.input} />
        <span className={styles.after}>请输入密码</span>
      </div>
      <button onClick={handleLogin} className={styles.btn}>登录</button>
    </form>
  );
};

export default Index;
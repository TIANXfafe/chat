import React, {useState} from 'react';
import styles from './index.module.less';
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import {HandLeft, HandRight} from '@icon-park/react';
import maskImg from '../../assets/images/18.png';

const Index = () => {
  // 遮罩层样式
  const [maskStyle, setMaskStyle] = useState({});
  // 登录表单样式
  const [leftStyle, setLeftStyle] = useState({});
  // 注册表单样式
  const [rightStyle, setRightStyle] = useState({});

  /**
   * 切换到注册表单
   */
  const goRegister = () => {
    setMaskStyle({left: '510px'});
    setLeftStyle({left: '20px', zIndex: 1});
    setRightStyle({left: '20px', zIndex: 2});
  };
  /**
   * 切换到登录表单
   */
  const goLogin = () => {
    setMaskStyle({left: '20px'});
    setLeftStyle({left: '510px', zIndex: 2});
    setRightStyle({left: '510px', zIndex: 1});
  }

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <div className={styles.mask} style={maskStyle}>
          <img src={maskImg} alt="" className={styles.maskImg}/>
        </div>
        <div className={styles.leftContent} style={leftStyle}>
          <h1>登录</h1>
          <LoginForm />
          <span onClick={goRegister} className={styles.jumpContent}>
            <HandLeft theme="filled" size="25" fill="#333" strokeLinejoin="bevel" strokeLinecap="square"/>
            <span>前往注册</span>
          </span>
        </div>
        <div className={styles.rightContent} style={rightStyle}>
          <h1>注册</h1>
          <RegisterForm />
          <span onClick={goLogin} className={styles.jumpContent}>
            <span>前往登录</span>
            <HandRight theme="filled" size="25" fill="#333" strokeLinejoin="bevel" strokeLinecap="square"/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Index;

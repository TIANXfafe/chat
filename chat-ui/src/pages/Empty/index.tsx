import React from 'react';
import styles from './index.module.less';
import noChat from '../../assets/images/status/noChat.png';

const Index = () => {
  return (
    <div className={styles.empty}>
      <img className={styles.status} src={noChat} alt="暂无消息"/>
      <span className={styles.info}>暂无聊天!</span>
    </div>
  );
};

export default Index;

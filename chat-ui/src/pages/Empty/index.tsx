import React from 'react';
import styles from './index.module.less';
import noChat from '../../assets/images/status/noChat.png';
import {useSpring, animated} from "react-spring";
import useSequenceList from "../../hooks/useSequenceList";

const Index = () => {
  const spring = useSequenceList(-200);

  return (
    <div className={styles.empty}>
      <animated.div style={spring} className={styles.animatedDiv}>
        <img className={styles.status} src={noChat} alt="暂无消息"/>
        <span className={styles.info}>暂无聊天!</span>
      </animated.div>
    </div>
  );
};

export default Index;

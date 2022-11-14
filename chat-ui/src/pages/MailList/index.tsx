import React from 'react';
import {TextMessage, PhoneCall} from "@icon-park/react";
import {config, animated, useChain, useSpring, useSpringRef, useTransition} from "react-spring";

import styles from './index.module.less';
import Avatar from '../../components/Avatar';
import face1 from '../../assets/images/face-male-1.jpg';

const data = [
  {
    id: 1,
    name: 'nfonofaoawdf',
    avatar: face1
  },
  {
    id: 2,
    name: 'nfonofaoawdf',
    avatar: face1
  },
  {
    id: 3,
    name: 'nfonofaoawdf',
    avatar: face1
  },
  {
    id: 4,
    name: 'nfonofaoawdf',
    avatar: face1
  },
  {
    id: 5,
    name: 'nfonofaoawdf',
    avatar: face1
  },
  {
    id: 6,
    name: 'nfonofaoawdf',
    avatar: face1
  }
]

const Index = () => {
  const springApi = useSpringRef();
  const style = useSpring({
    ref: springApi,
    config: config.stiff,
    from: {
      opacity: 0,
      transform: 'scale(0.2)'
    },
    to: {
      opacity: 1,
      transform: 'scale(1)'
    }
  });

  const transApi = useSpringRef();
  const transition = useTransition(data, {
    ref: transApi,
    trail: 400 / data.length,
    from: {
      opacity: 0,
      scale: 0
    },
    enter: {
      opacity: 1,
      scale: 1
    }
  });


  useChain([springApi, transApi], [0, 0.1]);

  return (
    <animated.div className={styles.mailList} style={style}>
      <div className={styles.mailHeader} >
        123
      </div>
      <div className={styles.mailBody} >
        {transition((style: any, item: any) => (
          <animated.div
            className={styles.mailItem}
            style={style}
          >
            <div className={styles.mailInfo}>
              <Avatar src={item.avatar} size={"60px"} status={"online"} statusIconSize={"10px"} />
              <div className={styles.mailName}>{item.name}</div>
            </div>
            <div className={styles.mailAction}>
              <TextMessage theme="outline" size="20" fill="#333" strokeWidth={3} strokeLinecap="square"/>
              <PhoneCall theme="outline" size="20" fill="#333" strokeWidth={3} strokeLinecap="square"/>
            </div>
          </animated.div>
        ))}
      </div>
    </animated.div>
  );
};

export default Index;

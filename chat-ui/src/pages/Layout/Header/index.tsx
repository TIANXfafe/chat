import React from 'react';
import styles from './index.module.less'
import Avatar from "../../../components/Avatar";
import face1 from "../../../assets/images/face-male-1.jpg";
import {MoreApp, PhoneTelephone, Star} from "@icon-park/react";

const Index = () => {
  return (
    <header className={styles.header}>
      <div className={styles.infoContent}>
        <Avatar src={face1} size="40px"/>
        <span className={styles.name}>Billy Moon</span>
      </div>
      <div className={styles.actionContent}>
        <Star
          theme="outline"
          // theme="filled"
          size="25"
          fill="#B2B5BE"
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
        <PhoneTelephone
          theme="outline"
          size="25"
          fill="#B2B5BE"
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
        <MoreApp
          theme="outline"
          size="25"
          fill="#B2B5BE"
          strokeLinejoin="bevel"
          strokeLinecap="butt"
        />
      </div>
    </header>
  );
};

export default Index;

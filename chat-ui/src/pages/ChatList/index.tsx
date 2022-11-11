import React from 'react';
import {Outlet} from 'react-router-dom';
import styles from './index.module.less';
import Aside from "../Layout/Aside";

const Index = () => {
  return (
    <div className={styles.chatList}>
      <Aside />
      <section className={styles.content}>
        <Outlet />
      </section>
    </div>
  );
};

export default Index;

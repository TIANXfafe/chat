import React from 'react';
import {Outlet, Route} from 'react-router-dom';

import styles from './index.module.less';

import Sider from './Sider';

const Index = () => {
  return (
    <section className={styles.layout}>
      <Sider />
      <section className={styles.container}>
        <Outlet />
      </section>
    </section>
  );
};

export default Index;

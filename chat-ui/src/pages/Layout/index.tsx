import React from 'react';

import styles from './index.module.less';

import Sider from './Sider';
import Aside from './Aside';
import Header from './Header';
import Content from './Content'
import Footer from './Footer';

const Index = () => {
  return (
    <section className={styles.layout}>
      <Sider />
      <section className={styles.container}>
        <Aside />
        <section className={styles.content}>
          <Header />
          <Content />
          <Footer />
        </section>
      </section>
    </section>
  );
};

export default Index;

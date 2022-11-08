import React, {Suspense} from 'react';
import {Layout} from '@douyinfe/semi-ui';
import { Outlet } from 'react-router-dom'
import Sider from './components/Sider';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './index.module.less';

const { Content } = Layout

const Index = () => {
  return (
    <Layout className={styles.layoutPage}>
      <Sider />
      <Layout>
        <Header />
        <Content className={styles.layoutContent}>
          <Suspense fallback={<div>正在加载中...</div>}>
            <Outlet />
          </Suspense>
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Index;

import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Banner, Button } from '@douyinfe/semi-ui';
import {toast} from 'react-hot-toast';

import checkLogin from '../../utils/checkLogin';
import {clearSessionStorage, getSessionStorage} from '../../utils/storage';
import Sider from './Sider';
import GlobalContext from '../../store/common/global';
import styles from './index.module.less';

const Index = () => {
  const navigator = useNavigate();

  const [visible, setVisible] = useState<boolean>(false);
  const [globalInfo, setGlobalInfo] = useState<any>({});

  const jumpToPersonal = () => {
    navigator('/personal');
    setVisible(false);
  }

  const banner = (
    <Banner
      type="warning"
      onClose={() => setVisible(false)}
      description={
        <div className={styles.bannerContent}>
          <h4>请先完善个人信息!</h4>
          <Button onClick={jumpToPersonal}>立即前往</Button>
        </div>
      }
    />
  );

  useEffect(() => {
    if (!checkLogin()) {
      toast.error('登录超时，请重新登录!');
      clearSessionStorage();
      navigator('/login');
    }
    const userInfo = getSessionStorage('userInfo');
    // @ts-ignore
    setGlobalInfo(JSON.parse(userInfo));
    // @ts-ignore
    const {nickname, avatar} = JSON.parse(userInfo) || {nickname: "", avatar: ""};
    if (!avatar && !nickname) {
      setVisible(true)
    }
  }, [])

  return (
    <GlobalContext.Provider value={globalInfo}>
      {visible ? banner : null}
      <section className={styles.layout}>
        <Sider />
        <section className={styles.container}>
          <Outlet />
        </section>
      </section>
    </GlobalContext.Provider>
  );
};

export default Index;

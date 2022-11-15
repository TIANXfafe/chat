import React, {useEffect, useState} from 'react';
import {AddressBook, Communication, Config, FolderQuality, Power} from "@icon-park/react";
import Avatar from "../../../components/Avatar";
import styles from './index.module.less';
import face1 from "../../../assets/images/face-male-1.jpg";
import {logout} from "../../../request/api";
import toast from "react-hot-toast";
import {clearSessionStorage} from "../../../utils/storage";
import {NavLink, useNavigate} from "react-router-dom";
import router from '../../../router';

const Menu = () => {
  const [routes, setRoutes] = useState<any>([]);

  useEffect(() => {
    const navRouter = router.routes[0].children;
    setRoutes(navRouter);
    console.log('rrr', navRouter)
  })

  return (
    <>
      {routes.length ? routes.map((item: any) => {
        return (
          <NavLink
            key={item.id}
            to={item.path}
            className={(isActive) => isActive ? styles.activeMenu : styles.menuItem}
          >
            <Communication
              theme="outline"
              size="25"
              fill="#fff"
              strokeWidth={3}
              strokeLinejoin="bevel"
              strokeLinecap="square"
            />
          </NavLink>
        )
      }) : null}
    </>
  )
}

const Index = () => {
  const navigator = useNavigate();

  /**
   * 退出登录
   */
  const handleLogout = async () => {
    try {
      const res = await logout();
      toast.success('退出成功!');
      clearSessionStorage();
      navigator('/login');
    } catch (err) {
      toast.error((err as string));
    }
  }

  return (
    <nav className={styles.sidebar}>
      <Avatar src={face1} />
      <section className={styles.menuContent}>
        {/*<Menu />*/}
        <NavLink
          to={"/"}
          className={(isActive) => isActive ? styles.activeMenu : styles.menuItem}
        >
          <Communication
            theme="outline"
            size="25"
            fill="#fff"
            strokeWidth={3}
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />
        </NavLink>
        <NavLink
          to="/mailList"
          className={(isActive) => isActive ? styles.activeMenu : styles.menuItem}
        >
          <AddressBook
            theme="outline"
            size="25"
            fill="#3E4C5F"
            strokeWidth={3}
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />
        </NavLink>
          <NavLink
          to={"/fileList"}
          className={(isActive) => isActive ? styles.activeMenu : styles.menuItem}
          >
          <FolderQuality
          theme="outline"
          size="25"
          fill="#3E4C5F"
          strokeWidth={3}
          strokeLinejoin="bevel"
          strokeLinecap="square"
          />
          </NavLink>
      </section>
      <section className={styles.menuAction}>
        <Config
          theme="outline"
          size="25"
          fill="#fff"
          strokeLinejoin="bevel"
          strokeLinecap="square"
        />
        <Power
          theme="outline"
          size="24"
          fill="#3E4C5F"
          strokeLinejoin="bevel"
          strokeLinecap="square"
          onClick={handleLogout}
        />
      </section>
    </nav>
  );
};

export default Index;

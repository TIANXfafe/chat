import React from 'react';
import {AddressBook, Communication, Config, FolderQuality, Power} from "@icon-park/react";
import Avatar from "../../../components/Avatar";
import styles from './index.module.less';
import face1 from "../../../assets/images/face-male-1.jpg";
import {logout} from "../../../request/api";
import toast from "react-hot-toast";
import {clearLocalStorage} from "../../../utils/storage";
import {useNavigate} from "react-router-dom";

const Index = () => {
  const navigator = useNavigate();

  /**
   * 退出登录
   */
  const handleLogout = async () => {
    try {
      const res = await logout();
      toast.success('退出成功!');
      clearLocalStorage();
      navigator('/login');
    } catch (err) {
      toast.error((err as string));
    }
  }

  return (
    <nav className={styles.sidebar}>
      <Avatar src={face1} />
      <section className={styles.menuContent}>
        <div className={styles.menuItem}>
          <Communication
            theme="outline"
            size="25"
            fill="#fff"
            strokeWidth={3}
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />
        </div>
        <div className={styles.menuItem}>
          <AddressBook
            theme="outline"
            size="25"
            fill="#fff"
            strokeWidth={3}
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />
        </div>
        <div className={styles.menuItem}>
          <FolderQuality
            theme="outline"
            size="25"
            fill="#3E4C5F"
            strokeWidth={3}
            strokeLinejoin="bevel"
            strokeLinecap="square"
          />
        </div>
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

import React from 'react';
import {TextMessage, DocDetail, PhoneCall} from "@icon-park/react";
import styles from './index.module.less';

import Avatar from '../../components/Avatar';
import face1 from '../../assets/images/face-male-1.jpg';

const Index = () => {
  return (
    <div className={styles.mailList}>
      <div className={styles.mailHeader}>
        123
      </div>
      <div className={styles.mailBody}>
        <section className={styles.mailItem}>
          <div className={styles.mailInfo}>
            <Avatar src={face1} size={"60px"} status={"online"} statusIconSize={"10px"} />
            <div className={styles.mailName}>当年哇哦难道我noon味道</div>
          </div>
          <div className={styles.mailAction}>
            <TextMessage theme="outline" size="20" fill="#333" strokeWidth={3} strokeLinecap="square"/>
            <PhoneCall theme="outline" size="20" fill="#333" strokeWidth={3} strokeLinecap="square"/>
          </div>
        </section>
        <section className={styles.mailItem}>
          <div className={styles.mailInfo}>
            <Avatar src={face1} size={"60px"} status={"offline"} statusIconSize={"10px"} />
            <div className={styles.mailName}>当年哇哦难道我noon味道</div>
          </div>
          <div className={styles.mailAction}>
            <TextMessage theme="outline" size="20" fill="#333" strokeWidth={3} strokeLinecap="square"/>
            <PhoneCall theme="outline" size="20" fill="#333" strokeWidth={3} strokeLinecap="square"/>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Index;

import React from 'react';
import styles from './index.module.less';

import face1 from '../../assets/images/face-male-1.jpg'

interface AvatarProps {
  /**
   * 头像链接
   */
  src: string;
  /**
   * 头像大小
   */
  size?: string;
  /**
   * 是否显示状态
   */
  status?: "online" | "offline" | null;
  /**
   * 状态标志大小
   */
  statusIconSize?: string;
}

export const Avatar = ({
  src,
  size = "48px",
  status,
  statusIconSize = "8px",
  ...props
}: AvatarProps) => {
  return (
    <div {...props} className={styles.avatar}>
      {status &&
        <div className={styles.status}>
          <div className={styles.statusContainer} style={{
            width: statusIconSize,
            height: statusIconSize,
          }}>
            <div className={styles.statusContent} style={{
              width: `${parseInt(statusIconSize) / 2}px`,
              height: `${parseInt(statusIconSize) / 2}px`,
              backgroundColor: `${status === "online" ? "#34D859" : "rgba(24, 28, 47, .2)"}`
            }} />
          </div>
        </div>}
      <div className={styles.clip} style={{width: size, height: size}}>
        <img src={src} alt="" className={styles.avatarImg}/>
      </div>
    </div>
  );
};

export default Avatar;
import React from 'react';
import styles from './index.module.less';
import classNames from 'classnames';

interface BadgeProps {
  /**
   * 是否显示徽章
   */
  show?: boolean;
  /**
   * 未读数
   */
  count?: number;
  /**
   * 未读数为0时是否显示徽章
   */
  showZero?: boolean;
  /**
   * 显示数字或红点 true为红点，false为数字或内容
   */
  variants?: boolean;
  children?: React.ReactNode;
}

export const Badge = ({
  show = true,
  count = 0,
  showZero = false,
  variants = false,
  children,
  ...props
}: BadgeProps) => {
  const renderDefault = () => <div className={styles.default}>{count > 99 ? "99+" : count}</div>

  const renderDot = () => {
    return (
      <>
        <div
          className={styles.dot}
          style={{visibility: variants && !showZero && count === 0 ? "hidden" : "visible"}}
        />
        {children}
      </>
    )
  }

  return (
    <div
      {...props}
      style={{
        visibility: !variants && !showZero && count === 0 ? "hidden" : "visible",
        display: show ? "flex" : "none",
        width: children ? '48px' : 0
      }}
      className={styles.Badge}
    >
      {variants ? renderDot() : renderDefault()}
    </div>
  );
};

export default Badge;
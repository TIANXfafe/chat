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
   * 显示数字或红点 true为红点，false为数字
   */
  variants?: boolean;
  /**
   * 内容
   */
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
  /**
   * 渲染数字
   */
  const renderDefault = () => {
    return (
      <div
        className={styles.default}
        style={{
          visibility: !variants && !showZero && count === 0 ? "hidden" : "visible",
          display: show ? "flex" : "none",
        }}
      >
        {count > 99 ? "99+" : count}
      </div>
    )
  }

  /**
   * 渲染内容
   */
  const renderDot = () => {
    return (
      <>
        <div
          className={styles.dot}
          style={{
            visibility: !showZero && count === 0 ? "hidden" : "visible",
            display: show ? "flex" : "none",
          }}
        />
        {children}
      </>
    )
  }

  return (
    <div
      style={{width: children ? '48px' : 0}}
      className={styles.Badge}
      {...props}
    >
      {variants ? renderDot() : renderDefault()}
    </div>
  );
};

export default Badge;
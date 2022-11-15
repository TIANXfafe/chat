import React from 'react';
import styles from './index.module.less';
import { animated, config, useSpring } from 'react-spring';

const Index = () => {
  const spring = useSpring({
    config: config.stiff,
    from: {
      opacity: 0,
      transform: 'scale(0.2)'
    },
    to: {
      opacity: 1,
      transform: 'scale(1)'
    }
  });

  return (
    <animated.section className={styles.personal} style={spring}>
      <div className={styles.leftContent}>
        <div className={styles.cardContent}>
          <div className={styles.infoCard}>
            hhh
          </div>
        </div>
        <div className={styles.cardAction}>456</div>
      </div>
      <div className={styles.rightContent}>2</div>
    </animated.section>
  );
};

export default Index;

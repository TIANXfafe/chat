import React from 'react';
import styles from './index.module.less';
import Avatar from "../../../components/Avatar";
import face2 from "../../../assets/images/face-male-2.jpg";
import classNames from "classnames";

const Index = () => {
  return (
    <section className={styles.chatContent}>
      <div className={styles.messageItem}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={classNames(styles.messageItem, styles.isMine)}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={styles.messageItem}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={styles.messageItem}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={styles.messageItem}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={classNames(styles.messageItem, styles.isMine)}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={classNames(styles.messageItem, styles.isMine)}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={classNames(styles.messageItem, styles.isMine)}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
      <div className={classNames(styles.messageItem, styles.isMine)}>
        <Avatar src={face2} size="40px"></Avatar>
        <div className={styles.messageDetail}>
          <div className={styles.messageInfo}>
            <div className={styles.messagePerson}>Ahmed Medi</div>
            <div className={styles.messageTime}>16:30</div>
          </div>
          <div className={styles.messageContent}>
            This new landing page, What do you think?
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;

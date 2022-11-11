import React, {useState} from 'react';
import styles from './index.module.less';
import {Pic, Send} from "@icon-park/react";
import toast from "react-hot-toast";

const Index = () => {
  const [msgInput, setMsgInput] = useState<string>("");

  /**
   * input输入框更改事件
   * @param e
   */
  const handleInput = (e: any) => {
    setMsgInput(e.target.value);
  }
  /**
   * input输入框按键弹起事件
   * @param e
   */
  const handleKeyUp = (e:any) => {
    if (e.keyCode === 13) {
      if (msgInput.trim()) {
        console.log('发送消息')
      } else {
        toast.error('输入内容不能为空');
      }
    }
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.sendContent}>
        <input
          className={styles.msgInput}
          type="text"
          placeholder="请输入"
          onChange={(e) => handleInput(e)}
          onKeyUp={(e) => handleKeyUp(e)}
        />
        <div className={styles.sendAction}>
          <label htmlFor="file" className={styles.actionItem}>
            <Pic
              theme="outline"
              size="20"
              fill="#E0E0E0"
              strokeLinejoin="bevel"
              strokeLinecap="square"
            />
          </label>
          <input id="file" type="file" style={{display: "none"}}/>
          <button className={styles.sendBtn}>
            <Send
              theme="outline"
              size="20"
              fill="#fff"
              strokeLinejoin="bevel"
              strokeLinecap="square"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Index;

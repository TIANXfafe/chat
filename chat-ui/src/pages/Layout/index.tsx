import React, {useState} from 'react';
import {
  Star,
  PhoneTelephone,
  MoreApp,
  Pic,
  Send,
  Config,
  Power,
  Communication,
  AddressBook,
  FolderQuality,
  AddOne,
  Pin,
  PeopleSpeak
} from '@icon-park/react';
import classNames from "classnames";

import styles from './index.module.less';

import Avatar from "../../components/Avatar";

import face1 from '../../assets/images/face-male-1.jpg';
import face2 from '../../assets/images/face-male-2.jpg';

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
        console.log('输入内容不能为空')
      }
    }
  }

  return (
    <section className={styles.layout}>
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
          />
        </section>
      </nav>
      <section className={styles.container}>
        <aside className={styles.subSidebar}>
          <section className={styles.sideHeader}>
            <h2 className={styles.sideTitle}>Message</h2>
            <button className={styles.sideBtn}>
              <AddOne
                theme="outline"
                size="25"
                fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="square"
              />
            </button>
          </section>
          <section className={styles.sideSearch}>
            <input type="text" className={styles.sideInput} placeholder="Search..."/>
          </section>
          <section className={styles.sideBody}>
            <section className={styles.topList}>
              <div className={styles.listContent}>
                <div className={styles.listTitle}>
                  <Pin theme="filled" size="15" fill="#AEAEAE" strokeWidth={3} strokeLinecap="square"/>
                  <span>PINNED</span>
                </div>
              </div>
              <div className={styles.chatList}>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>5</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.normalList}>
              <div className={styles.listContent}>
                <div className={styles.listTitle}>
                  <PeopleSpeak theme="filled" size="15" fill="#AEAEAE" strokeWidth={3} strokeLinecap="square"/>
                  <span>All</span>
                </div>
              </div>
              <div className={styles.chatList}>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
                <div className={styles.chatItemContent}>
                  <div className={styles.chatDetail}>
                    <Avatar src={face2} size="38px" />
                    <div className={styles.chatDetailContent}>
                      <div className={styles.chatPerson}>Putri Tanjak</div>
                      <div className={styles.chatMsg}>Wow reaily cool</div>
                    </div>
                  </div>
                  <div className={styles.chatInfo}>
                    <div className={styles.chatTime}>16:30</div>
                    <div className={styles.msgNum}>99+</div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </aside>
        <section className={styles.content}>
          <header className={styles.header}>
            <div className={styles.infoContent}>
              <Avatar src={face1} size="40px"/>
              <span className={styles.name}>Billy Moon</span>
            </div>
            <div className={styles.actionContent}>
              <Star
                theme="outline"
                // theme="filled"
                size="25"
                fill="#B2B5BE"
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <PhoneTelephone
                theme="outline"
                size="25"
                fill="#B2B5BE"
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
              <MoreApp
                theme="outline"
                size="25"
                fill="#B2B5BE"
                strokeLinejoin="bevel"
                strokeLinecap="butt"
              />
            </div>
          </header>
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
        </section>
      </section>
    </section>
  );
};

export default Index;
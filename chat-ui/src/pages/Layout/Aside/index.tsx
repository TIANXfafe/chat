import React from 'react';
import styles from './index.module.less';
import {AddOne, PeopleSpeak, Pin} from "@icon-park/react";
import Avatar from "../../../components/Avatar";
import face2 from "../../../assets/images/face-male-2.jpg";

const Index = () => {
  return (
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
  );
};

export default Index;

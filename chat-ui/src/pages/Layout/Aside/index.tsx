import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './index.module.less';
import {AddOne, PeopleSpeak, Pin} from "@icon-park/react";
import Avatar from "../../../components/Avatar";
import face2 from "../../../assets/images/face-male-2.jpg";
import {animated} from "react-spring";
import useStaggeredList from "../../../hooks/useStaggeredList";
import {Modal, Button, Input} from '@douyinfe/semi-ui';
import {IconSearch, IconClose, IconTick} from '@douyinfe/semi-icons';
import sunny from '../../../assets/images/weather/sunny.png';
import toast from "react-hot-toast";
import useSequenceList from "../../../hooks/useSequenceList";

const Index = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [searchInfo, setSearchInfo] = useState<string>("");

  const navigator = useNavigate();
  const jumpToChat = () => {
    navigator("/chatContent/1")
  }
  const headerSpring = useSequenceList(-100);
  const topTrailAnimate = useStaggeredList(2)
  const normalTrailAnimate = useStaggeredList(15)

  const handleSearch = () => {
    if (searchInfo.trim()) {
      console.log(1111)
    } else {
      toast.error('请输入搜索内容!');
    }
  }

  return (
    <aside className={styles.subSidebar}>
      <animated.div style={headerSpring}>
        <section className={styles.sideHeader}>
          <h2 className={styles.sideTitle}>Message</h2>
          <button className={styles.sideBtn} onClick={() => setVisible(true)}>
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
      </animated.div>
      <animated.div style={headerSpring}>
        <section className={styles.weather}>
          <img src={sunny} alt="天气"/>
        </section>
      </animated.div>
      <animated.div style={headerSpring}>
        <section className={styles.sideSearch}>
          <input type="text" className={styles.sideInput} placeholder="Search..."/>
        </section>
      </animated.div>
      <section className={styles.sideBody}>
        <section className={styles.topList}>
          <div className={styles.listContent}>
            <div className={styles.listTitle}>
              <Pin theme="filled" size="15" fill="#AEAEAE" strokeWidth={3} strokeLinecap="square"/>
              <span>PINNED</span>
            </div>
          </div>
          <div className={styles.chatList}>
            <animated.div key={0} style={topTrailAnimate[0]}>
              <div className={styles.chatItemContent} onClick={jumpToChat}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={1} style={topTrailAnimate[1]}>
              <div className={styles.chatItemContent} onClick={jumpToChat}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
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
            <animated.div key={0} style={normalTrailAnimate[0]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={1} style={normalTrailAnimate[1]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={2} style={normalTrailAnimate[2]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={3} style={normalTrailAnimate[3]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={4} style={normalTrailAnimate[4]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={5} style={normalTrailAnimate[5]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={6} style={normalTrailAnimate[6]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={7} style={normalTrailAnimate[7]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={8} style={normalTrailAnimate[8]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={9} style={normalTrailAnimate[9]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={10} style={normalTrailAnimate[10]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={11} style={normalTrailAnimate[11]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={12} style={normalTrailAnimate[12]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={13} style={normalTrailAnimate[13]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
            <animated.div key={14} style={normalTrailAnimate[14]}>
              <div className={styles.chatItemContent}>
                <div className={styles.chatDetail}>
                  <Avatar src={face2} size="38px"/>
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
            </animated.div>
          </div>
        </section>
      </section>
      <Modal
        title="添加好友"
        visible={visible}
        closeOnEsc={false}
        onCancel={() => setVisible(false)}
        footer={
          <>
            <Button
              icon={<IconClose/>}
              theme='solid'
              type='tertiary'
              onClick={() => setVisible(false)}
            >
              取消
            </Button>
            <Button
              icon={<IconTick/>}
              theme='solid'
              type="primary"
              style={{backgroundColor: '#C96FD1'}}
              onClick={handleSearch}
            >
              搜索
            </Button>
          </>
        }
      >
        <Input
          placeholder='请输入账号或昵称!'
          prefix={<IconSearch/>}
          showClear
          onChange={(value) => setSearchInfo(value)}
        />
      </Modal>
    </aside>
  );
};

export default Index;
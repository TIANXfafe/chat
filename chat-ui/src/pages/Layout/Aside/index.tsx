import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './index.module.less';
import {Remind, AddOne, PeopleSpeak, Pin} from "@icon-park/react";
import Avatar from "../../../components/Avatar";
import face2 from "../../../assets/images/face-male-2.jpg";
import {animated} from "react-spring";
import useStaggeredList from "../../../hooks/useStaggeredList";
import {Modal, Button, Input, SideSheet, List, ButtonGroup,  Card} from '@douyinfe/semi-ui';
import {IconSearch, IconClose, IconTick} from '@douyinfe/semi-icons';
import sunny from '../../../assets/images/weather/sunny.png';
import toast from "react-hot-toast";
import useSequenceList from "../../../hooks/useSequenceList";
import {addFriend, applyList, handleFriendApply, searchUser} from "../../../request/api";

const Index = () => {
  const navigator = useNavigate();
  const headerSpring = useSequenceList(-100);
  const topTrailAnimate = useStaggeredList(2);
  const normalTrailAnimate = useStaggeredList(15);

  // 是否展示搜索弹窗
  const [visible, setVisible] = useState<boolean>(false);
  // 是否展示申请列表弹窗
  const [applyVisible, setApplyVisible] = useState<boolean>(false);
  // 是否展示滑动侧边栏
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  // 搜索输入框内容
  const [searchInfo, setSearchInfo] = useState<string>("");
  // 搜索到的好友信息
  const [friendData, setFriendData] = useState<any>([]);
  // 申请列表
  const [applyData, setApplyData] = useState<any>([]);


  /**
   * 跳转至具体聊天页面
   */
  const jumpToChat = () => {
    navigator("/chatContent/1")
  }

  /**
   * 搜索按钮点击事件
   */
  const handleSearch = async () => {
    if (searchInfo.trim()) {
      const res: any = await searchUser({keyword: searchInfo});
      console.log('res', res)
      if (res.msg === 'ok') {
        if (res.data) {
          setFriendData([res.data]);
          setSheetVisible(true);
          console.log('res', res.data);
        } else {
          toast('暂无此人!')
        }
      }
    } else {
      toast.error('请输入搜索内容!');
    }
  }

  /**
   * 添加好友按钮点击事件
   */
  const handleAddFriend = async (friendInfo: any) => {
    const params = {
      friend_id: friendInfo.id,
      lookme: 1,
      lookhim: 1,
      nickname: ""
    }
    const res: any = await addFriend(params);
    if (res.msg === 'ok') {
      toast.success('申请提交成功!');
    }
  }
  /**
   * 打开申请列表弹窗
   */
  const openApplyModal = async () => {
    setApplyVisible(true);
    const res: any = await applyList(1, 10);
    if (res.msg === 'ok' && res.data.count) {
      setApplyData(res.data.result)
    }
  }
  /**
   * 处理好友申请
   * @param applyId 申请id
   * @param type 1：同意，2：拒绝，3：忽略
   */
  const handleApply = async (applyId: number, type: number) => {
    let status
    switch (type) {
      case 1:
        status = "agree";
        break;
      case 2:
        status = "refuse";
        break;
      case 3:
        status = "ignore";
        break;
    }
    const data ={
      nickname: "",
      lookme: 1,
      lookhim: 1,
      status
    }
    const res: any = await handleFriendApply(applyId, data);
    if (res.msg === 'ok') {
      toast.success('处理成功!');
      const newList = applyData.filter((item: {id: number}) => item.id === applyId)
      setApplyData(newList);
    }
  }

  return (
    <aside className={styles.subSidebar}>
      <animated.div style={headerSpring}>
        <section className={styles.sideHeader}>
          <h2 className={styles.sideTitle}>Message</h2>
          <div className={styles.btnGroup}>
            <button className={styles.sideBtn} onClick={openApplyModal}>
              <Remind
                theme="outline"
                size="25" fill="#fff"
                strokeWidth={3}
                strokeLinejoin="bevel"
                strokeLinecap="square"
              />
            </button>
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
          </div>
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
          placeholder='请输入昵称!'
          prefix={<IconSearch/>}
          showClear
          onChange={(value) => setSearchInfo(value)}
        />
      </Modal>
      <Modal
        title="申请列表"
        visible={applyVisible}
        closeOnEsc={false}
        onCancel={() => setApplyVisible(false)}
        footer={
          <>
            <Button
                icon={<IconClose/>}
                theme='solid'
                type='tertiary'
                onClick={() => setApplyVisible(false)}
            >
              关闭
            </Button>
          </>
        }
      >
        <List
          dataSource={applyData}
          renderItem={item => (
            <Card>
              <List.Item
                header={<Avatar src={item.user.avatar} />}
                main={
                  <div>
                    <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>{item.user.username}</span>
                  </div>
                }
                extra={
                  <ButtonGroup theme="borderless">
                    <Button onClick={() => handleApply(item.id, 1)}>同意</Button>
                    <Button onClick={() => handleApply(item.id, 2)}>拒绝</Button>
                    <Button onClick={() => handleApply(item.id, 3)}>忽略</Button>
                  </ButtonGroup>
                }
              />
            </Card>
          )}
        />
      </Modal>
      <SideSheet title="用户列表" visible={sheetVisible} onCancel={() => setSheetVisible(false)}>
        <List
          dataSource={friendData}
          renderItem={item => (
            <Card>
              <List.Item
                header={<Avatar src={item.avatar} />}
                main={
                  <div>
                    <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>{item.username}</span>
                  </div>
                }
                extra={
                  <ButtonGroup theme="borderless">
                    <Button onClick={() => handleAddFriend(item)}>添加好友</Button>
                  </ButtonGroup>
                }
              />
            </Card>
          )}
        />
      </SideSheet>
    </aside>
  );
};

export default Index;

import React, { useEffect, useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import { Form, Row, Button, Upload } from '@douyinfe/semi-ui';
import { IconTick, IconPlus } from '@douyinfe/semi-icons';
import styles from './index.module.less';
import Avatar from '../../components/Avatar';
import face1 from '../../assets/images/face-male-1.jpg';
import male from '../../assets/images/common/male.webp';
import female from '../../assets/images/common/female.webp';
import feperson from '../../assets/images/common/feperson.webp';
import { getSessionStorage, setSessionStorage } from "../../utils/storage";
import { fetchUserInfo, changeInfo } from "../../request/api";
import toast from "react-hot-toast";
import avatar from "../../components/Avatar";

const Index = () => {
  const [ info, setInfo ] = useState<any>({});
  const [avatarImg, setAvatarImg] = useState<string>("");
  const { Section, Input, Select } = Form;

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

  const submitForm = async (value: any) => {
    const form = value;
    form.avatar = avatarImg;
    const res = await changeInfo(form);
    if (res.data === 'ok') {
      const userInfo = await fetchUserInfo();
      if (userInfo.data) {
        setInfo(userInfo.data);
        setSessionStorage("userInfo", JSON.stringify(userInfo.data));
      }
    } else {
      toast.error('提交失败!');
    }
  }

  const onSuccess = (responseBody: any) => {
    console.log('responseBody', responseBody)
    if (responseBody.msg === '上传成功!') {
      toast.success('上传成功!')
      setAvatarImg(responseBody.data.url)
    } else {
      toast.error('上传失败!');
    }
  }

  useEffect(() => {
    const userInfo = getSessionStorage('userInfo');
    if(userInfo) {
      setInfo(JSON.parse(userInfo));
    }
  }, [])

  return (
    <animated.section className={ styles.personal } style={ spring }>
      <div className={ styles.leftContent }>
        <div className={ styles.cardContent }>
          <div className={ styles.infoCard }>
            <Avatar src={ info.avatar || face1 } size="80px" className={ styles.avatar }/>
            <div className={ styles.infoContent }>
              <div className={ styles.nickname }>{ info.nickname || info.username }</div>
              <div className={ styles.detail }>
                <span>{ info.age || 24 }岁</span>
                <span>{ info.sex }</span>
                <span>{ info.area || "上海，浦东新区" }</span>
              </div>
            </div>
          </div>
        </div>
        <div className={ styles.cardAction }>
          {
            info.sex === "男" ? (
              <img src={ male } alt=""/>
            ) : info.sex === "女" ? (
              <img src={ female } alt=""/>
            ) : (
              <img src={ feperson } alt=""/>
            )
          }
        </div>
      </div>
      <div className={ styles.rightContent }>
        <Form style={ { padding: 10, width: '100%' } } onSubmit={submitForm}>
          <Section text={ '基本信息' }>
            <Row>
              <Upload
                action="/api/upload"
                listType="picture"
                onSuccess={onSuccess}
                limit={1}
              >
                <IconPlus size="extra-large"/>
              </Upload>
            </Row>
            <Row>
              <Input
                field="nickname"
                label="昵称"
                initValue={ info.nickname }
                trigger='blur'
                style={ { width: '100%' } }
              />
            </Row>
            {/* <Row>
              <DatePicker style={ { width: '100%' } } field="date" label='生日' initValue={ new Date() }
                          placeholder='请选择出生日期'/>
            </Row> */ }
            <Row>
              <Select field="sex" style={ { width: '100%' } } label='性别' placeholder='请选择你的性别'>
                <Select.Option value="fePerson">保密</Select.Option>
                <Select.Option value="male">男</Select.Option>
                <Select.Option value="female">女</Select.Option>
              </Select>
            </Row>
            <Row className={ styles.btnContainer }>
              <Button
                htmlType="submit"
                theme="solid"
                icon={ <IconTick/> }
                style={ { width: '90%', backgroundColor: '#C96FD1' } }
              >提交</Button>
            </Row>
          </Section>
        </Form>

      </div>
    </animated.section>
  );
};

export default Index;

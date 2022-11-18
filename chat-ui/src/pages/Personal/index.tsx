import React, {useEffect, useState} from 'react';
import {animated, config, useSpring} from 'react-spring';
import {Button, Form, Row} from '@douyinfe/semi-ui';
import {IconPlus, IconTick} from '@douyinfe/semi-icons';
import toast from "react-hot-toast";

import {getSessionStorage, setSessionStorage} from "../../utils/storage";
import {changeInfo, cityList, fetchCityName, fetchUserInfo} from "../../request/api";
import Avatar from '../../components/Avatar';

import styles from './index.module.less';
import face1 from '../../assets/images/face-male-1.jpg';

const Index = () => {
  const { Section, Input, Select } = Form;

  // 基础信息
  const [ info, setInfo ] = useState<any>({});
  // 上传头像
  const [avatarImg, setAvatarImg] = useState<string>("");
  // 城市数据
  const [cityInfo, setCityInfo] = useState<any>([]);

  // 进入动画
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

  // 获取区域数据
  const fetchCity = async () => {
    const res: any = await cityList();
    if (res.msg === 'ok') {
      setCityInfo(res.data)
    } else {
      toast.error('获取城市数据失败!');
    }
  }
  // 图片上传成功事件
  const onSuccess = (responseBody: any) => {
    console.log('responseBody', responseBody)
    if (responseBody.msg === '上传成功!') {
      toast.success('上传成功!')
      setAvatarImg(responseBody.data.url)
    } else {
      toast.error('上传失败!');
    }
  }
  // 提交表单事件
  const submitForm = async (value: any) => {
    const form = value;
    form.avatar = avatarImg;
    form.area = form.area.join(",");
    const res = await changeInfo(form);
    if (res.data === 'ok') {
      const userInfo = await fetchUserInfo();
      if (userInfo.data) {
        setInfo(userInfo.data);
        setSessionStorage("userInfo", JSON.stringify(userInfo.data));
        toast.success('修改成功!')
      }
    } else {
      toast.error('提交失败!');
    }
  }
  // 根据id查询省市区name
  const handleUserInfo = async (city: string[]) => {
    const res: any = await fetchCityName({city})
    console.log('res', res)
    if (res.msg === 'ok') {
      return res.data.map((item: { label: string }) => item.label);
    } else {
      toast.error('城市信息错误!');
    }
  }

  useEffect(() => {
    const userInfo = getSessionStorage('userInfo');
    if(userInfo) {
      const userObj = JSON.parse(userInfo)
      if (userObj.area) {
        (async () => {
          const areaArr = await handleUserInfo(userObj.area.split(","));
          userObj.area = areaArr.join(",");
        })()
      }
      setInfo(userObj);
    }
    fetchCity().then();
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
              <img src="http://chatserver.oss-cn-shanghai.aliyuncs.com/common/6j3g629yujw0000.webp" alt=""/>
            ) : info.sex === "女" ? (
              <img src="http://chatserver.oss-cn-shanghai.aliyuncs.com/common/d6qrokqhu8o0000.webp" alt=""/>
            ) : (
              <img src="http://chatserver.oss-cn-shanghai.aliyuncs.com/common/4cppnx9dvps0000.webp" alt=""/>
            )
          }
        </div>
      </div>
      <div className={ styles.rightContent }>
        <Form style={ { padding: 10, width: '100%' } } onSubmit={submitForm}>
          <Section text={ '基本信息' }>
            <Row>
              <Form.Upload
                field='files'
                label='头像'
                action="/api/upload"
                listType="picture"
                onSuccess={onSuccess}
                limit={1}
              >
                <IconPlus size="extra-large"/>
              </Form.Upload>
            </Row>
            <Row>
              <Input
                field="nickname"
                label="昵称"
                initValue={ info.nickname }
                trigger='blur'
                style={ { width: '100%' } }
                placeholder="请输入昵称"
              />
            </Row>
            <Row>
              <Select field="sex" style={ { width: '100%' } } label='性别' placeholder='请选择你的性别'>
                <Select.Option value="fePerson">保密</Select.Option>
                <Select.Option value="male">男</Select.Option>
                <Select.Option value="female">女</Select.Option>
              </Select>
            </Row>
            <Form.Cascader
                placeholder="请选择所在地区"
                treeData={cityInfo}
                field='area'
                label='地区'
                style={{ width: '100%' }}
            >
            </Form.Cascader>
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

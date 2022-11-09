import React from 'react';
import { Badge, Button, Dropdown, Avatar, RadioGroup, Radio, Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconBell } from '@douyinfe/semi-icons';
import useStore from '../../../../store/common/global';
import HeaderMessage from '../HeaderMessage';

const Index = () => {
  const locale = useStore((state) => state.locale)
  const changeLocale = useStore((state) => state.changeLocale)

  const selectLocale = (locale: 'zh_CN' | 'en_GB') => {
    changeLocale(locale)
    localStorage.setItem('semi_locale', locale)
  }

  return (
      <div>
        <Dropdown
          trigger={'click'}
          showTick
          render={
            <Dropdown.Menu>
              <HeaderMessage />
            </Dropdown.Menu>
          }
        >
          <Badge count={5} overflowCount={99} type='danger'>
            <Button
              theme="borderless"
              icon={<IconBell size="large"/>}
              style={{
                color: 'var(--semi-color-text-2)'
              }}
            />
          </Badge>
        </Dropdown>
        <Dropdown
          render={
            <Dropdown.Menu>
              <Dropdown.Item>个人中心</Dropdown.Item>
              <Dropdown.Item>个人设置</Dropdown.Item>
              <Dropdown.Item>退出登录</Dropdown.Item>
            </Dropdown.Menu>
          }
        >
          <Avatar color="orange" size="small">
            semi
          </Avatar>
        </Dropdown>
        <RadioGroup type="button" defaultValue={locale} style={{ marginLeft: '20px' }}>
          <Radio value={'zh_CN'} onChange={() => selectLocale('zh_CN')}>
            中文
          </Radio>
          <Radio value={'en_GB'} onChange={() => selectLocale('en_GB')}>
            EN
          </Radio>
        </RadioGroup>
      </div>
  );
};

export default Index;

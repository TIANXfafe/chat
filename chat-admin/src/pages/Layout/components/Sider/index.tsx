import React, {useState, useMemo, useEffect} from 'react';
import {Layout, Nav} from '@douyinfe/semi-ui';
import { IconSemiLogo } from '@douyinfe/semi-icons';
import {useNavigate, useLocation} from "react-router-dom";
import menuList, {MenuItem} from '../../../../menus/config';
import useStore from '../../../../store/common/global';
import {useLocale} from "../../../../locales";

const {Sider} = Layout;

const renderIcon = (icon: any) => {
  if (!icon) {
    return null
  }
  return icon.render()
}

const findMenuByPath = (menus: MenuItem[], path: string, keys: any[]): any => {
  for (const menu of menus) {
    if (menu.path === path) {
      return [...keys, menu.itemKey]
    }
    if (menu.items && menu.items.length > 0) {
      const result = findMenuByPath(menu.items, path, [...keys, menu.itemKey])
      if (result.length === 0) {
        continue
      }
      return result
    }
  }
  return []
}

const Index = () => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  const {formatMessage} = useLocale();
  const locale = useStore(state => state.locale);
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  const navList = useMemo(() => {
    return menuList.map(item => {
      return {
        ...item,
        text: formatMessage({id: item.text}),
        icon: item?.icon ? renderIcon(item.icon) : null,
        items: item?.items
          ? item.items.map(child => {
              return {
                ...child,
                text: formatMessage({id: child.text}),
                icon: child.icon ? renderIcon(child.icon) : null
              }
            })
          : []
      }
    })
  }, [menuList, locale])

  const onSelect = (data: any) => {
    setSelectedKeys([...data.selectedKeys])
    navigate(data.selectedItems[0].path as string)
  };

  const onOpenChange = (data: any) => {
    setOpenKeys([...data.openKeys])
  };

  // setSelectedKeys 和 path 双向绑定
  useEffect(() => {
    const keys: string[] = findMenuByPath(menuList, pathname, [])
    setSelectedKeys([keys.pop() as string])
    setOpenKeys(Array.from(new Set([...openKeys, ...keys])))
  }, [pathname])

  return (
    <Sider style={{backgroundColor: 'var(--semi-color-bg-1)'}}>
      <Nav
        items={navList}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
        onOpenChange={onOpenChange}
        style={{maxWidth: 220, height: '100%'}}
        header={{
          logo: <IconSemiLogo style={{fontSize: 36}} />,
          text: 'Semi Admin'
        }}
        footer={{
          collapseButton: true
        }}
      />
    </Sider>
  );
};

export default Index;

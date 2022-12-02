import { Menu } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import React from 'react';

export const MdstMenu: React.FC = () => {
  const menus: ItemType[] = [
    {
      key: 'dashboard',
      label: '控制面板',
    },
    {
      key: 'world',
      label: '世界设置',
    },
    {
      key: 'players',
      label: '玩家管理',
    },
    {
      key: 'saves',
      label: '存档管理',
    },
    {
      key: 'helps',
      label: '帮助文档',
    },
    {
      key: 'settings',
      label: '系统设置',
    },
    {
      key: 'about',
      label: '关于系统',
    },
  ];
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['4']}
      items={menus}
    />
  );
};

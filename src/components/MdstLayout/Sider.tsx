import { Layout } from 'antd';
import React from 'react';
import { MdstMenu } from './Menu';

const { Sider } = Layout;

export const MdstSider: React.FC = () => (
  <Sider className="">
    <div className="max-w-full text-white m-[20px]">
      <div className="bg-white bg-opacity-20 w-full py-[10px] text-center text-[18px]">
        饥荒服务器管理
      </div>
    </div>
    <MdstMenu />
  </Sider>
);

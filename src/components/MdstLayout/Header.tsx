import { Layout } from 'antd';
import React from 'react';

const { Header } = Layout;

export const MdstHeader: React.FC = () => (
  <>
    <Header className="!bg-white !px-[40px]">
      <div className="flex">
        <div>用户名：{'zane'}</div>
      </div>
    </Header>
  </>
);

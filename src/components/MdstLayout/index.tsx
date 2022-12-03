import { Layout } from 'antd';
import React from 'react';
import { MdstHeader } from './Header';
import { useLocation } from 'umi';
import { MdstSider } from './Sider';

const { Content } = Layout;

export const MdstLayout: React.FC = (props) => {
  const location = useLocation();

  return (
    <Layout className="w-full h-full">
      {location.pathname === '/' ? '' : <MdstSider />}
      <Layout className="h-full">
        <MdstHeader />
        <Content className="p-[20px] w-full h-full bg-[url('@/assets/images/login-bg.svg')]">
          <div className="w-full h-full bg-white p-[20px]">
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

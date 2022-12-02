import { Layout } from 'antd';
import React from 'react';
import { MdstHeader } from './Header';
import { useRouteData } from 'umi';
import { MdstSider } from './Sider';

const { Content } = Layout;

export const MdstLayout: React.FC = (props) => {
  const { route } = useRouteData();
  console.log(route);

  return (
    <Layout className="w-full h-full">
      <MdstSider />
      <Layout className="h-full">
        <MdstHeader />
        <Content className="p-[20px] w-full h-full">
          <div className="w-full h-full bg-white p-[20px]">
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

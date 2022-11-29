import { Space } from 'antd';
import React from 'react';
import { LoginCard } from './components/LoginCard';
import { LoginHeader } from './components/LoginHeader';

export default function Page() {
  return (
    <div className="w-full h-full bg-[#f0f2f5] bg-[url('@/assets/images/login-bg.svg')]">
      <Space direction="vertical" size={40} className="w-full pt-[200px]">
        <LoginHeader />
        <LoginCard />
      </Space>
    </div>
  );
}

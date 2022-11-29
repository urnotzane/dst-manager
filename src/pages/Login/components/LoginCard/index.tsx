import React from 'react';
import { Card } from 'antd';
import { LoginForm } from '../LoginForm';

export const LoginCard: React.FC = () => (
  <>
    <Card
      title="登录"
      className="w-[400px] m-auto"
      headStyle={{ textAlign: 'center' }}
    >
      <LoginForm />
    </Card>
  </>
);

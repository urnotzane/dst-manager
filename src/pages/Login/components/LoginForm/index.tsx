import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import { history } from 'umi';

export const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Form
        name="login"
        labelAlign="left"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名！' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码！' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 0, span: 24 }}
        >
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{ offset: 0, span: 24 }}
          className="text-center mb-0"
        >
          <Button type="primary" htmlType="submit" size="large">
            登录
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

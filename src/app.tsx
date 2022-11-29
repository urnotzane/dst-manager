import { ConfigProvider } from 'antd';
import { ThemeConfig } from 'antd/es/config-provider/context';
import React from 'react';

const theme: ThemeConfig = {
  token: {
    borderRadius: 2,
  },
};

export const rootContainer = (element: JSX.Element) => {
  return (
    <React.StrictMode>
      <ConfigProvider theme={theme}>{element}</ConfigProvider>
    </React.StrictMode>
  );
};

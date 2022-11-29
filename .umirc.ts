import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/login', component: '@/pages/Login/index' },
  ],
  fastRefresh: {},
  locale: { antd: true },
});

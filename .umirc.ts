import { defineConfig } from 'umi';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  title: 'MDST',
  routes: [
    {
      path: '/login',
      component: '@/pages/Login/index',
    },
    {
      path: '/',
      component: '@/pages/Home/index',
      routes: [
        {
          path: '/server/:id',
          component: '@/pages/About/index',
          meta: {
            name: '控制面板',
          },
        },
        {
          path: '/server/:id/world',
          component: '@/pages/About/index',
          meta: {
            name: '世界管理',
          },
        },
      ],
    },
  ],

  fastRefresh: true,
  extraPostCSSPlugins: [
    tailwindcss({
      config: './tailwind.config.js',
    }),
  ],
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});

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
        // {
        //   path: '/ds',
        //   component: '@/pages/Home/index',
        // }
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

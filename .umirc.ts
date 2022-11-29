import { defineConfig } from 'umi';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/Home/index' },
    { path: '/login', component: '@/pages/Login/index' },
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

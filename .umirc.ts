import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // {
    //   name: '权限演示',
    //   path: '/access',
    //   component: './Access',
    // },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' CRUD 模仿',
      path: '/imitate',
      component: './Imitate',
    },
    {
      name: 'TODO List 示例',
      path: '/todos',
      component: './Todos',
    },
    {
      name: 'TODO List 模仿',
      path: '/todolist',
      component: './Todolist',
    },
  ],
  proxy: {
    '/api': {
      target: 'http://0.0.0.0:8080',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  npmClient: 'npm',
});

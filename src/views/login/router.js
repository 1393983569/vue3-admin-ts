export default [
    {
        name: 'login',
        path: 'login',
        component: () => import('./index.vue'),
        meta: {
          keepAlive: true,
        },
      },
  ]

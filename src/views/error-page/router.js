export default [
    {
        name: 'error',
        path: 'error',
        component: () => import('./index.vue'),
        meta: {
          keepAlive: true,
        },
      },
  ]

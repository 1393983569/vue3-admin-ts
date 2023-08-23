export default [
    {
        name: '404',
        path: '/404',
        component: () => import('@/views/error-page/404.vue'),
        isHidden: true,
      },
    
      {
        name: 'Login',
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        isHidden: true,
        meta: {
          title: '登录页',
        },
      },
]

const asyncRouter:[] = []
const modules = import.meta.glob('@/views/**/router.js', {eager: true})
Object.keys(modules).forEach((item:any) => {
    asyncRouter.push(item)
})
export { asyncRouter } 

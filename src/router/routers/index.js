export default basicRoutes = [
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

const asyncRouter = []
const modules = import.meta.import('@/views/**/router.js')
Object.keys(modules).forEach(item => {
    asyncRouter.push(item)
})
export { asyncRouter } 

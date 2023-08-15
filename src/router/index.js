import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routers'

export default router = createRouter({
    // 路由模式
    history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
    routes: basicRoutes,
    // 滚动行为 期望滚动到哪个的位置
    scrollBehavior: () => ({ left: 0, top: 0 }),
})


// 添加动态路由
export async function addDynamicRoutes() {
    // 有无token
    // 处理权限
}

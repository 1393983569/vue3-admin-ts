import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { basicRoutes } from './routers'
import { usePermissionStore } from '@/store'

const isHash = import.meta.env.VITE_USE_HASH === 'true'
export const router = createRouter({
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
    const permissionStore = usePermissionStore()
    // 处理完权限后的路由列表
    const accessRoutes = permissionStore.generateRoutes([])
    accessRoutes.forEach((route: any) => {
        !router.hasRoute(route.name) && router.addRoute(route)
    });
}

function setupRouter(app:) {
    addDynamicRoutes()
    beforeCreateRouterHandle(router)

}

import { defineStore } from 'pinia'
import { asyncRouter } from '@/router/routers'

function filterAsyncRoutes(routerList: any, role: []) {
    console.log(routerList, role)
    return routerList
}

export const useUseUserInfo = defineStore('permission', {
    state: () => ({
        role: [],
        accessRoutes: []
    }),
    actions: {
        setRole(role:[]) {
            this.role = role
        },
        generateRoutes(route: []) {
            this.accessRoutes = filterAsyncRoutes(route, [])
            return this.accessRoutes
        }
    }
})

import { defineStore } from 'pinia'
import { asyncRouter } from '@/router/routers'

function filterAsyncRoutes(routerList: [], role: []): [] {
    return routerList
}

export const usePermissionStore = defineStore('permission', {
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

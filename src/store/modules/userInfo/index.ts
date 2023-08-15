import { defineStore } from 'pinia'

export const useUserInfo = defineStore('userInfo', {
    state: () => ({
        role: [],
        roleRouter: []
    }),
    actions: {
        setRole(role:[]) {
            this.role = role
        },
        setRoleRouter(roleRouter:[]) {
            this.roleRouter = roleRouter
        }
    }
})

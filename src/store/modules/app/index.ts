import { defineStore } from 'pinia'

export const useApp = defineStore('app', {
    state: () => ({
        // 是否黑色主题
        isDark: false
    }),
    actions: {
        setIsDark(isDark: Boolean) {
            this.isDark = isDark
        }
    }
  })

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue';
import { setupRouter } from '@/router'
import { setupStore } from '@/store'


async function setupApp() {
    const app = createApp(App)
    // 初始化pinia
    setupStore(app)
    // 初始化路由
    await setupRouter(app)
    app.use(Antd)
    app.mount('#app')
  }
  
  setupApp()

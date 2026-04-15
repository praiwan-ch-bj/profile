import '@/assets/main.css'

import App from '@/App.vue'
import { createApp } from 'vue'
import { setupPlugins } from './plugins'
import { setupRouter } from './router'


const app = createApp(App)

setupPlugins(app)
setupRouter(app)

app.mount('#app')
import type { App } from 'vue'
import router from './router'
import i18n from './i18n'

export function setupPlugins(app: App) {
  app.use(router)
  app.use(i18n)
}
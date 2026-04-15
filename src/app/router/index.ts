import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { 
          path: '',
          name: 'home',
          component: HomeView,
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/layouts/EmptyLayout.vue'),
      children: [
        { 
          path: '',
          name: 'not-found',
          component: () => import('@/views/ErrorPage/NotFoundView.vue')
        }
      ]
    }
  ],
})

export function setupRouter(app: App) {
  app.use(router)
}
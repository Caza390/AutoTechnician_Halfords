import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SupportView from '../views/SupportView.vue'

import MakeView from '../components/MakeView.vue'
import ModelView from '../components/ModelView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/support',
      name: 'support',
      component: SupportView,
    },

    {
      path: '/:category/',
      name: 'make',
      component: MakeView,
    },
    {
      path: '/:category/:make/',
      name: 'model',
      component: ModelView,
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import CategoryView from '../components/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutView,
    },

    // Keep incase
    {
      path: '/:tabs/:category',
      name: 'category',
      component: CategoryView,
    },
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SupportView from '../views/SupportView.vue'

import MakeView from '../components/MakeView.vue'
import ModelView from '../components/ModelView.vue'
import YearView from '../components/YearView.vue'
import DashCameraResults from '../components/DashCameraResults.vue'
import AudioResults from '../components/AudioResults.vue'
import SpeakersResults from '../components/SpeakersResults.vue'

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
    {
      path: '/:category/:make/:model/',
      name: 'year',
      component: YearView,
    },
    {
      path: '/dash-camera/:make/:model/:year/',
      name: 'dashcameraresults',
      component: DashCameraResults,
    },
    {
      path: '/audio/:make/:model/:year/',
      name: 'audioresults',
      component: AudioResults,
    },
    {
      path: '/speakers/:make/:model/:year/',
      name: 'speakersresults',
      component: SpeakersResults,
    },
  ]
})

export default router

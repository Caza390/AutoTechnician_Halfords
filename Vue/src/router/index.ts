import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MakeView from '../components/MakeView.vue'
import ModelView from '../components/ModelView.vue'
import CategoryView from '../components/CategoryView.vue'
import DashCameraResults from '../components/DashCameraResults.vue'
import RadioResults from '../components/RadioResults.vue'
import SpeakersResults from '../components/SpeakersResults.vue'

import DashCameraInfoSupport from '../components/InfoSupport/DashCameraVue/DashCameraInfoSupport.vue'

import RadioInfoSupport from '../components/InfoSupport/RadioVue/RadioInfoSupport .vue'

import SpeakersInfoSupport from '../components/InfoSupport/SpeakersVue/SpeakersInfoSupport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/vehicle-select/',
      name: 'make',
      component: MakeView,
    },
    {
      path: '/vehicle-select/:make/',
      name: 'model',
      component: ModelView,
    },
    {
      path: '/vehicle-select/:make/:model/:year',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/vehicle-select/:make/:model/:year/dash-camera',
      name: 'dashCameraResults',
      component: DashCameraResults,
    },
    {
      path: '/vehicle-select/:make/:model/:year/audio',
      name: 'audioResults',
      component: RadioResults,
    },
    {
      path: '/vehicle-select/:make/:model/:year/speakers',
      name: 'speakersResults',
      component: SpeakersResults,
    },

    {
      path: '/dash-camera-info-support',
      name: 'dashCameraInfoSupport',
      component: DashCameraInfoSupport,
    },

    {
      path: '/radio-info-support',
      name: 'radioInfoSupport',
      component: RadioInfoSupport,
    },

    {
      path: '/speakers-info-support',
      name: 'speakersInfoSupport',
      component: SpeakersInfoSupport,
    },
  ]
})

export default router

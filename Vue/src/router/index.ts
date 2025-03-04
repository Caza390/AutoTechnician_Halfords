import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MakeView from '../components/MakeView.vue'
import ModelView from '../components/ModelView.vue'
import CategoryView from '../components/CategoryView.vue'
import DashCameraResults from '../components/DashCameraResults.vue'
import RadioResults from '../components/RadioResults.vue'
import SpeakersResults from '../components/SpeakersResults.vue'

import DashCameraInfoSupport from '../components/InfoSupport/DashCameraVue/DashCameraInfoSupport.vue'
import DashCameraInformation from '../components/InfoSupport/DashCameraVue/DashCameraInformation.vue'
import DashCameraHowTo from '../components/InfoSupport/DashCameraVue/DashCameraHowTo.vue'
import DashCameraTroubleShooting from '../components/InfoSupport/DashCameraVue/DashCameraTroubleShooting.vue'

import RadioInfoSupport from '../components/InfoSupport/RadioVue/RadioInfoSupport.vue'
import RadioInformation from '../components/InfoSupport/RadioVue/RadioInformation.vue'
import RadioHowTo from '../components/InfoSupport/RadioVue/RadioHowTo.vue'
import RadioTroubleShooting from '../components/InfoSupport/RadioVue/RadioTroubleShooting.vue'

import SpeakersInfoSupport from '../components/InfoSupport/SpeakersVue/SpeakersInfoSupport.vue'
import SpeakersInformation from '../components/InfoSupport/SpeakersVue/SpeakersInformation.vue'
import SpeakersHowTo from '../components/InfoSupport/SpeakersVue/SpeakersHowTo.vue'
import SpeakersTroubleShooting from '../components/InfoSupport/SpeakersVue/SpeakersTroubleShooting.vue'

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
      path: '/vehicle-select/:make/:model/:year/audio/',
      name: 'audioResults',
      component: RadioResults,
    },
    {
      path: '/vehicle-select/:make/:model/:year/audio/:type',
      name: 'audioResultsWithType',
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
      path: '/dash-camera-info-support/camera-information',
      name: 'dashCameraInformation',
      component: DashCameraInformation,
    },
    {
      path: '/dash-camera-info-support/how-to',
      name: 'dashCameraHowTo',
      component: DashCameraHowTo,
    },
    {
      path: '/dash-camera-info-support/troubleshooting',
      name: 'dashCameraTroubleShooting',
      component: DashCameraTroubleShooting,
    },

    {
      path: '/radio-info-support',
      name: 'radioInfoSupport',
      component: RadioInfoSupport,
    },
    {
      path: '/radio-info-support/radio-information',
      name: 'radioInformation',
      component: RadioInformation,
    },
    {
      path: '/radio-info-support/how-to',
      name: 'radioHowTo',
      component: RadioHowTo,
    },
    {
      path: '/radio-info-support/troubleshooting',
      name: 'radioTroubleShooting',
      component: RadioTroubleShooting,
    },

    {
      path: '/speakers-info-support',
      name: 'speakersInfoSupport',
      component: SpeakersInfoSupport,
    },
    {
      path: '/speakers-info-support/speaker-information',
      name: 'speakersInformation',
      component: SpeakersInformation,
    },
    {
      path: '/speakers-info-support/how-to',
      name: 'SpeakersHowTo',
      component: SpeakersHowTo,
    },
    {
      path: '/speakers-info-support/troubleshooting',
      name: 'speakersTroubleShooting',
      component: SpeakersTroubleShooting,
    },
  ]
})

export default router

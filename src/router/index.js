import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import mobHome from '@/components/mobHome.vue'
import mobWelcome from '@/components/mobWelcome.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children:[
      {
        path:'/',
        component: mobHome,
      },
      {
        path:'welcome',
        component: mobWelcome,
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

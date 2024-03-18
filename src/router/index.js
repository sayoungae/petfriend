import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import mobHome from '@/components/mobHome.vue'
import mobWelcome from '@/components/mobWelcome.vue'
import mobpage3 from '@/components/mobPage3.vue'
import mobpage4 from '@/components/mobPage4.vue'
import mobpage5 from '@/components/mobPage5.vue'
import mobpage6 from '@/components/mobPage6.vue'




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
      },
      {
        path:'page3',
        component: mobpage3,
      },
      {
        path:'page4',
        component: mobpage4,
      },
      {
        path:'page5',
        component: mobpage5,
      },
      {
        path:'page6',
        component: mobpage6,
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

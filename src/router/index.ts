import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrototypeView from '../views/PrototypeView.vue'
import TeamView from '../views/TeamView.vue'
import SponsorsView from '@/views/SponsorsView.vue'
import ContactUsView from '@/views/ContactUsView.vue'
import PrototypeDetailView from '@/views/PrototypeDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/prototype',
      name: 'prototype',
      component: PrototypeView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/prototype/:id', // <--- Nova rota dinâmica
      name: 'prototype-detail',
      component: PrototypeDetailView,
      props: true
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: SponsorsView,
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUsView,
    }
  ],
})

export default router

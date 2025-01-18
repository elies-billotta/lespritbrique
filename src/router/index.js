import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import RealisationView from '@/views/RealisationView.vue'
import KitView from '@/views/KitView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView,
    },
    {
      path: '/realisations/0',
      name: 'Réalisations',
      component: RealisationView,
    },
    {
      path : '/kit-4x4',
      name : "Le 4x4 des Gazelles",
      component : KitView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    }
  ]
})

export default router

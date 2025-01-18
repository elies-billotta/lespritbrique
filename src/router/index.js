import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreationView from '@/views/CreationView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:slug',
      name: 'creation',
      component: CreationView,
      props: true, 
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    }
  ]
})

export default router

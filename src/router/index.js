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
      path: '/realisations/:id',
      name: 'creation',
      component: CreationView, // Vue qui gère l'affichage de la création
      props: true, // Permet de passer l'id comme prop
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    }
  ]
})

export default router

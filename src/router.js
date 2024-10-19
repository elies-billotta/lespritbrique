import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';

const baseURL = import.meta.env.VITE_BASE_URL || '/';
const routes = [
  {
    path: '/',
    name: 'App',
    component: App,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/', 
  },
];

const router = createRouter({
  history: createWebHistory(baseURL),
  routes,
});

export default router;

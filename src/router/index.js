import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: HomeView,
    },
    {
      path: '/teams',
      name: 'teams',
      component: HomeView,
    },
    {
      path: '/employees',
      name: 'employees',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: HomeView,
    },
    {
      path: '/meetings',
      name: 'meetings',
      component: HomeView,
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: HomeView,
    },
    {
      path: '/settings',
      name: 'settings',
      component: HomeView,
    },
  ],
})

export default router

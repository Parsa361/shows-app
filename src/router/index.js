import { createRouter, createWebHistory } from 'vue-router'
import RickMortyCards from '../views/RickMortyCards.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RickMortyCards
    },
  ]
})

export default router

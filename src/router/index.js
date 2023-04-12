import { createRouter, createWebHistory } from 'vue-router'
import RickMortyCards from '../views/RickMortyCards.vue'
import RickMortyCard from '../views/RickMortyCard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RickMortyCards
    },
    {
      path: '/rick-morty/:id',
      name: 'rick-morty',
      component: RickMortyCard
    }
  ]
})

export default router

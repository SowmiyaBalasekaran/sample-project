import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import learnBasicUi from '../views/LearnBasicUI.vue'
import sampleComponent from '../views/NameManupulationView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ui-basics',
    name: 'learnBasics',
    component: learnBasicUi
  },
  {
    path: '/sowmiya',
    name: 'nameManupulation',
    component: sampleComponent
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

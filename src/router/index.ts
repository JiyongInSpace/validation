import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import PageHome from '../views/PageHome.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: PageHome
  },
  {
    path: '/vee_validate',
    name: 'vee_validate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageVeeValidate.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

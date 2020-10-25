import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Dashboard,
    children: [
      {
        path: 'home',
        component: () => import('@/components/Home.vue'),
        meta: { title: 'Home' }
      },
      {
        path: '',
        component: () => import('@/components/Home.vue'),
        meta: { title: 'Home' }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

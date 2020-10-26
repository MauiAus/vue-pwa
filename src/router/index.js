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
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { title: 'Login' }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('@/views/Signup.vue'),
    meta: { title: 'Signup' }
  }
]

const router = new VueRouter({
  routes
})

export default router

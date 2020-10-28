import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'
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
      },
      {
        path: 'profile',
        component: () => import('@/components/Profile.vue'),
        meta: { title: 'Profile' }
      },
      {
        path: 'createStudyset',
        component: () => import('@/components/caseStudyset.vue'),
        meta: { title: 'Case Study Set' }
      },
      {
        path: 'studySet',
        component: () => import('@/components/studySet.vue'),
        meta: { title: 'Study Set' }
      },
      {
        path: 'library',
        component: () => import('@/components/library.vue'),
        meta: { title: 'Library' }
      },
      {
        path: 'stats',
        component: () => import('@/components/stats.vue'),
        meta: { title: 'Statistics'}
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

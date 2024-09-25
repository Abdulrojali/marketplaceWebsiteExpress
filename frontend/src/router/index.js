import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginpage',
      component: () => import('@/views/loginpage.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/dashboard menu page/home.vue')
        },
        {
          path: '/costumerService',
          name: 'costumerService',
          component: () => import('@/views/dashboard menu page/costumer Service.vue')
        },
        {
          path: '/faktur',
          name: 'faktur',
          component: () => import('@/views/dashboard menu page/faktur.vue')
        },
        {
          path: '/order',
          name: 'order',
          component: () => import('@/views/dashboard menu page/order.vue')
        },
        {
          path: '/tambahBarang',
          name: 'tambahBarang',
          component: () => import('@/views/dashboard menu page/tambahBarang.vue')
        },
        {
          path:'/viewDetail/:id',
          name:'/viewDetail',
          component:()=> import('@/views/viewDetail.vue')
        }
      ]
    },
    {
      path: '/createAccounts',
      name: 'createAccounts',
      component: () => import('@/views/createAccounts.vue')
    }
  ]
})

export default router

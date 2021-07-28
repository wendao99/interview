import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TtHtml from '@/views/TtHtml.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/html',
    name: 'TtHtml',
    component: TtHtml
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

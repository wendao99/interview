import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TtHtml from '@/views/TtHtml.vue'
import TtCss from '@/views/TtCss.vue'
import TtJavaScript from '@/views/TtJavaScript'

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
  {
    path: '/css',
    name: 'TtCss',
    component: TtCss
  },
  {
    path: '/javascript',
    name: 'TtJavaScript',
    component: TtJavaScript
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Home from '@/page/home'
import News from '@/page/medicalNews'
import Message from '@/page/message'
import Mycenter from '@/page/personCenter'

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/mycenter',
      name: 'mycenter',
      component: Mycenter
    }
  ]
})

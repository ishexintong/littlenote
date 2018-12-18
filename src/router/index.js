import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Note from '@/components/Note'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },
    {
      path:'/note',
      name:'这是笔记',
      component:Note
    }
  ]
})

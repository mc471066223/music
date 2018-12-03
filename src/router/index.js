import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Detail from '@/components/detail'
import Player from '@/components/player'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },{
      path: '/player/:id',
      name: 'Player',
      component: Player
    }
  ]
})

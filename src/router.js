import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Bugs from './views/Bugs.vue'
import Materials from './views/Materials.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/bugs',
      name: 'Bugs',
      component: Bugs
    },
    {
      path: '/materials',
      name: 'Materials',
      component: Materials
    }
  ]
})
import Vue from 'vue'
import Router from 'vue-router'
import Planets from './views/Planets.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'planets',
      component: Planets
    }
  ]
})

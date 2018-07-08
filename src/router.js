import Vue from 'vue'
import Router from 'vue-router'
import Characters from './views/Characters.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'characters',
      component: Characters
    }
  ]
})

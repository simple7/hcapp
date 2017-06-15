import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Hello from '@/pages/Hello'
import Index from '@/pages/home/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: {path: '/hello'},
      children: [{
        path: '/hello',
        name: 'Hello',
        component: Hello
      },
        {
          path: '/index',
          name: 'Index',
          component: Index
        }]
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Weather from '../components/weather.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: '/weather/ningbo',
    children:[{
      path: 'weather/:id',
      component: Weather
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router

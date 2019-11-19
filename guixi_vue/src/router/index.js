import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Building from '@/components/Building'
import Unit from '@/components/Unit'
import Company from '@/components/Company'
import Enterprise from '@/components/Enterprise'
import guixiVue from './config'

Vue.use(Router)

Vue.prototype.baseUrl = guixiVue.baseUrl

Vue.prototype.baseCompany = guixiVue.baseCompany

Vue.prototype.baseDescription = guixiVue.baseDescription

export default new Router({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Building',
      path: '/building',
      component: Building
    },
    {
      name: 'Unit',
      path: '/unit',
      component: Unit
    },
    {
      name: 'Company',
      path: '/company',
      component: Company
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      component: Enterprise
    }
  ]
})

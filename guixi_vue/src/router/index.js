import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Building from '@/components/Building'
import Unit from '@/components/Unit'
import Company from '@/components/Company'

Vue.use(Router)

Vue.prototype.baseUrl = 'http://localhost:3000/'

Vue.prototype.baseCompany = '成都高新区桂溪街道办事处'

Vue.prototype.baseDescription = '人口服务管理社会化信息采集点'

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
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Find from '@/components/find/Find.vue'
import Member from '@/components/member/Member.vue'
import Shopcart from '@/components/shopcart/Shopcart.vue'
import NewsList from '@/components/Home/NewsList.vue'

//解决不能跳转自己
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    }, {
      path: '/shopcart',
      name: 'shopcart',
      component: Shopcart
    }, {
      path: '/member',
      name: 'member',
      component: Member
    }, {
      path: '/news/list',
      name: 'newsList',
      component: NewsList
    }
  ]
})

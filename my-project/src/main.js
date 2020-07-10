// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/mock.js'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = Axios;
// Axios.defaults.baseURL='http://localhost:8080/static/json';
//设置一个axios的拦截器
Axios.interceptors.request.use(function(config) {
  // console.log(config);
  return config;
})
Axios.interceptors.response.use(function(response) {
  // console.log(response);
  return response;
})


import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem
} from 'vant';
import {
  Lazyload
} from 'vant';
import {
  Grid,
  GridItem
} from 'vant';
import {
  List,
  Cell,
  PullRefresh
} from 'vant';
import {
  Tab,
  Tabs
} from 'vant';
import {
  Loading,
  Toast
} from 'vant';
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

import VuePreview from 'vue-preview'
import installer from '@/plugins/Installer.js';
import myitem from '@/components/common/My-item.vue'
import myul from '@/components/common/My-ul.vue'
import Comment from '@/components/common/Comment.vue'
// import Filter from '@/filter/Filters.js'

Vue.component(myul.name, myul);
Vue.component(myitem.name, myitem);
Vue.component(Comment.name, Comment);

import moment from 'moment';

Vue.filter('convertTime', function(data, formatStr) {
  return moment(data).format(formatStr);
})

Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);
Vue.use(Toast)
Vue.use(VuePreview)
Vue.use(Loading);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(installer);
Vue.use(Grid);
Vue.use(List);
Vue.use(Cell);
Vue.use(PullRefresh);
Vue.use(GridItem);
Vue.use(Lazyload);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Swipe);
Vue.use(SwipeItem);

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

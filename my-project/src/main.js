// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/mock.js'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios=Axios;
// Vue.$axios.baseURL='http://localhost:8080/static/json';

import { NavBar,Tabbar, TabbarItem,Swipe, SwipeItem} from 'vant';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';
import { List ,Cell,PullRefresh} from 'vant';

import installer from '@/plugins/Installer.js';
import myitem from '@/components/common/My-item.vue'
import myul from '@/components/common/My-ul.vue'
// import Filter from '@/filter/Filters.js'

Vue.component(myul.name,myul);
Vue.component(myitem.name,myitem);

import moment from 'moment';

Vue.filter('convertTime', function(data, formatStr) {

  return moment(data).format(formatStr);
})


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
  components: { App },
  template: '<App/>'
})

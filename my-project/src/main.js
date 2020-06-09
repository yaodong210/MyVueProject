// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/js/mock.js'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios=Axios;

import { NavBar,Tabbar, TabbarItem,Swipe, SwipeItem} from 'vant';
import { Lazyload } from 'vant';
import { Grid, GridItem } from 'vant';

Vue.use(Grid);
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

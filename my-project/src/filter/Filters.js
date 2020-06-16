import moment from 'moment';
import Vue from 'vue';

Vue.filter('convertTime', function(data, formatStr) {

  return moment(data).format(formatStr);
})


export default Filter;

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false



import {http} from '@/assets/js/http.js'

Vue.prototype.$http = http;

/** 
 *   that.$http('get/post',url, {
      params
    }).then(function (res) {})
    
 * */





/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
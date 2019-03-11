// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import Vuex from 'vuex'

 Vue.use(Vuex)
 import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false

Vue.use(iView);
import store from './store'
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
  store,
  components: { App },
  template: '<App/>'
})

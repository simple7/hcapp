import Vue from 'vue'
import App from './App'
import bootstrap from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './style.scss'
Vue.use(bootstrap);
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App},
})

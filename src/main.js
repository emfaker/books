import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant";
import 'vant/lib/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.min.css'
import './util/axios'
import './filter/filter'

Vue.use(MintUI)

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

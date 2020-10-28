import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bulma from 'bulma';
import Buefy from 'buefy';
import axios from 'axios';
import VueAxios from 'vue-axios';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import { VueSpinners } from '@saeris/vue-spinners'
import VuePaginate from 'vue-paginate';


Vue.use(VuePaginate)
Vue.use(VueSpinners)
Vue.use(Bulma);
Vue.use(Buefy);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");

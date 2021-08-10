import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
console.log('11111111');
console.log('222222222');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

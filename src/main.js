// import aframe from 'aframe';
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [
  'a-animation',
  'a-scene',
  'a-sky',
  'a-entity',
  'a-camera',
  'a-box',
  'a-text',
];

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

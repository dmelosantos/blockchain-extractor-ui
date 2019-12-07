import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

// TODO add dynamic configuration of server on webpack/parcel per stage
const socket = io('http://localhost:5001');

Vue.use(VueSocketIOExt, socket);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');

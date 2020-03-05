import Vue from 'vue'
import Vuetify from "vuetify"
import 'vuetify/dist/vuetify.min.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuetify);
const EventBus = new Vue();
export default EventBus;

new Vue({
  vuetify: new Vuetify({

  }),
  render: h => h(App),
}).$mount('#app')

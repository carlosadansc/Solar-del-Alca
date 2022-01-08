import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.config.productionTip = false

Vue.use(VueFbCustomerChat, {
  page_id: "110165508018462", //  change 'null' to your Facebook Page ID,
  theme_color: '#333333', // theme color in HEX
  locale: 'es_ES', // default 'en_US'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

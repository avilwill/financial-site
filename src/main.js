import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.use(VueMaterial)
Vue.use(VueRouter)

import Saving from './components/saving'
import Investing from './components/investing'
import Calculating from './components/calculating'
import RealEstate from './components/realEstate'
import Business from './components/business'
import Stocks from './components/stocks'
import Social from './components/social'



Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: '/saving', name: 'saving', component: Saving },
    { path: '/investing', name: 'investing', component: Investing },
    { path: '/calculating', name: 'calculating', component: Calculating },
    { path: '/realEstate', name: 'realEstate', component: RealEstate },
    { path: '/business', name: 'business', component: Business },
    { path: '/stocks', name: 'stocks', component: Stocks },
    { path: '/social', name: 'social', component: Social },
    { path: '/', name: 'saving', component: Saving },
    { path: '*', redirect: '/' }
  ]
});

router.beforeEach((to, from, next) => {
  return next()
})

document.addEventListener('DOMContentLoaded', () => {
  const header = new Vue({
    router,
    render: h => h(App)
  }).$mount();
  document.body.appendChild(header.$el)
});

new Vue({
  render: h => h(App),
}).$mount('#app')

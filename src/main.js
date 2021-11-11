import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'animate.css'
import VueSparkles from  'vue-sparkles'
import login from './components/login.vue'
import home from './components/home.vue'

Vue.use(VueRouter);
Vue.use(VueSparkles);

const router = new VueRouter({
  routes:[
    {
      name:'login',
      component:login,
      path:'/'
    },
    {
      name:'home',
      component:home,
      path:'/home'
    },
  ]
})


Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

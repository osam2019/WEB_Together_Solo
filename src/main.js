import Vue from 'vue';
import ElementUI from 'element-ui';
import MintUI from 'mint-ui';
// import '../node_modules/element-ui/lib/theme-chalk/index.css';
import '../node_modules/mint-ui/lib/style.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import {store} from './store.js';
import {routes} from './routes';
import VuePageTransition from 'vue-page-transition'

export const eventBus = new Vue();

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(VueResource)
Vue.use(VuePageTransition)
Vue.http.options.root = 'https://vueresource-a3eb7.firebaseio.com/';

// var myMixin = {
//   methods:{
//     cardDetail(card){
//       this.setCard(card);
//       let vm = this;
//       setTimeout(()=>{
//         vm.$router.push({
//                           path:'/carddetail/'+card.id,
//                         });
//       },100);
//     },
//   },
// }

const router = new VueRouter({
  routes,
  mode : 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return {x: 0, y: 0};
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

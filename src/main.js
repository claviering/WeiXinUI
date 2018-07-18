// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import './site.css';
Vue.config.productionTip = false;

Vue.use(VueRouter);

import wechat from './components/wechat/wechat.vue';
import contacts from './components/contacts/contacts.vue';
import discover from './components/discover/discover.vue';
import me from './components/me/me.vue';
var router1 = new VueRouter({
    routes:[
            {path:'', redirect:'/wechat'},
            {path:'/wechat', component:wechat},
            {path:'/contacts', component:contacts},
            {path:'/discover', component:discover},
            {path:'/me', component:me}
        ]
});

/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  components: { App },
  router:router1,
  template: '<App/>'
})

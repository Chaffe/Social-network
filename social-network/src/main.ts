import Vue from 'vue';
import Vuelidate from 'vuelidate';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';
import messagePlugin from './utils/message.plugin';
import './registerServiceWorker';
import '../node_modules/materialize-css/dist/js/materialize.min';

import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);

firebase.initializeApp({
  apiKey: 'AIzaSyB5aR8nQZ89bEKD33JvJca0cJAIdMLrg-Y',
  authDomain: 'social-network-1a614.firebaseapp.com',
  projectId: 'social-network-1a614',
  storageBucket: 'social-network-1a614.appspot.com',
  messagingSenderId: '1014769189535',
  appId: '1:1014769189535:web:dad25796f6cf1bc7d458aa',
  measurementId: 'G-S0ZRS2W4LB',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

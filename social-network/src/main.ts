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
  apiKey: 'AIzaSyCMW9R6pDxZao_ffoZhdbCj7Ib-D4sqOQ8',
  authDomain: 'social-network-6a515.firebaseapp.com',
  projectId: 'social-network-6a515',
  storageBucket: 'social-network-6a515.appspot.com',
  messagingSenderId: '690142104193',
  appId: '1:690142104193:web:b36902356df1b107d2db80',
  measurementId: 'G-4105WZEY3Y',
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

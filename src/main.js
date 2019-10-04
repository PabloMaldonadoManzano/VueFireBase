import Vue from 'vue';
import firebase from 'firebase'
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

 // Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: 'AIzaSyBGeHwzDdQH0cA_2hJ0u-os74nuTN6GHOU',
  authDomain: 'platzi-rooms-d2aef.firebaseapp.com',
  databaseURL: 'https://platzi-rooms-d2aef.firebaseio.com',
  projectId: 'platzi-rooms-d2aef',
  storageBucket: '',
  messagingSenderId: '109615951541',
  appId: '1:109615951541:web:707b6d08814d0730e3d8fc',
  measurementId: 'G-4NMVTFWJZE'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    this.$store.dispatch('FETCH_USER', { id: store.state.authId })
  },
}).$mount('#app');

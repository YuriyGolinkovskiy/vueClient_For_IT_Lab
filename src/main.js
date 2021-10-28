import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from '@/router';
import axios from 'axios';
import store from './store';
import { initializeApp } from 'firebase/app';

Vue.prototype.axios = axios;

Vue.config.productionTip = false;

new Vue({
    vuetify,
    router,
    store,
    // created() {
    //     const firebaseConfig = {
    //         apiKey: 'AIzaSyBL854jbG6eKZBDJx7MfDWNRw9XwzrNGFo',
    //         authDomain: 'db-for-it-lab.firebaseapp.com',
    //         databaseURL:
    //             'https://db-for-it-lab-default-rtdb.europe-west1.firebasedatabase.app',
    //         projectId: 'db-for-it-lab',
    //         storageBucket: 'db-for-it-lab.appspot.com',
    //         messagingSenderId: '1058776293607',
    //         appId: '1:1058776293607:web:a60399b5b3e6e3d2358242',
    //         measurementId: 'G-H6N5HKY37Z',
    //     };
    //     initializeApp(firebaseConfig);
    // },
    render: (h) => h(App),
}).$mount('#app');

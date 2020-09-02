import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  BRow,
  BContainer,
  BCol,
  BCard,
  BNavbar,
  BNavbarBrand,
  BNavItem,
  BNavbarNav,
  BForm,
  BFormInput
} from "bootstrap-vue";
import firebase from "firebase/app";
import "firebase/auth";

Vue.config.productionTip = false;

Vue.component("b-row", BRow);
Vue.component("b-col", BCol);
Vue.component("b-container", BContainer);
Vue.component("b-card", BCard);
Vue.component("b-navbar", BNavbar);
Vue.component("b-navbar-brand", BNavbarBrand);
Vue.component("b-nav-item", BNavItem);
Vue.component("b-navbar-nav", BNavbarNav);
Vue.component("b-form", BForm);
Vue.component("b-form-input", BFormInput);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

var firebaseConfig = {
  apiKey: "AIzaSyBbc9qtXhkUtvHpi1GvYXp4PFn6sPMgt-w",
  authDomain: "noteify-27fdb.firebaseapp.com",
  databaseURL: "https://noteify-27fdb.firebaseio.com",
  projectId: "noteify-27fdb",
  storageBucket: "noteify-27fdb.appspot.com",
  messagingSenderId: "168056549773",
  appId: "1:168056549773:web:1c707f01e20f6dab8f4dc4"
};

firebase.initializeApp(firebaseConfig);

const app = new Vue({
  router,
  store,
  render: h => h(App)
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.commit("userFirebaseAuth/SET_USER", {
      email: user.email,
      uID: user.uid,
      token: user.xa
    });
  }
  app.$mount("#app");
});

import Vue from "vue";
import VueRouter from "vue-router";
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
//import store from "../store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          next({ name: "Favourites" });
        } else {
          next();
        }
      });
    }
  },
  {
    path: "/favourites",
    name: "Favourites",
    component: () => import("../views/Favourites.vue"),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          return next({
            name: "Login"
          });
        } else {
          return next();
        }
      });
    }
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/About.vue"),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          return next({
            name: "Login"
          });
        } else {
          return next();
        }
      });
    }
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../views/songSearch.vue"),
    meta: {
      requiresAuth: true
    },
    beforeEnter: (to, from, next) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          return next({
            name: "Login"
          });
        } else {
          return next();
        }
      });
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

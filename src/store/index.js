import Vue from "vue";
import Vuex from "vuex";
import songState from "./songState";
import geniusCurrentSongInfo from "./geniusCurrentSongInfo";
import userFirebaseAuth from "./userFirebaseAuth";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    songState,
    geniusCurrentSongInfo,
    userFirebaseAuth
  }
});

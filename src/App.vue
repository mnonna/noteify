<template>
  <div id="app" class="d-flex justify-content-center align-items-center">
    <navbar v-if="userAuth == true"></navbar>
    <router-view />
    <player v-if="userAuth == true"></player>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Montserrat&display=swap");
body {
  height: 100%;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Luckiest Guy", cursive;
  }

  a,
  p {
    font-family: "Montserrat", sans-serif;
    margin: 0;
    padding: 0;
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #c8d6e5;
    max-width: 100vw;
    min-height: 100vh;
    height: auto;
    @media screen and (max-width: 1366px) {
      background-color: #222f3e;
      p {
        font-size: 14px;
      }
    }
  }
}
</style>

<script>
import navbar from "./components/menu/Navbar";
import player from "./components/player/PlayerFooterComponent";
import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
export default {
  components: {
    navbar,
    player
  },

  data(){
    return{
      userAuth: null
    }
  },

  created(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.userAuth = true;
      } else {
        this.userAuth = false;
      }
    });
  }
};
</script>
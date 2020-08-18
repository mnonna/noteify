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
    background-image: linear-gradient(90deg, rgba(200,214,229,.7) 10%, rgba(34,47,62,.5) 25%, rgba(34,47,62,.5) 65%, rgba(200,214,229,.7) 80%), url("./assets/img/turntable-1109588_1920.jpg");
    background-attachment: fixed;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 100vw;
    min-height: 100vh;
    height: auto;
    @media screen and (max-width: 1366px) {
      background-image: linear-gradient(180deg, rgba(34,47,62,.7) 0%, rgba(34,47,62,.7) 100%), 
      url("./assets/img/turntable-1109588_1920.jpg");
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
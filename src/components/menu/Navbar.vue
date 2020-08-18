<template>
  <b-navbar fixed="top" class="d-flex justify-content-between align-items-center" id="nav">
    <b-navbar-brand id="app-logo">
      <h1>NOTEIFY</h1>
    </b-navbar-brand>
    <b-navbar-nav
      id="navbar-links"
      class="justify-content-around align-items-center"
      v-if="isMobile == false"
    >
      <b-nav-item>
        <router-link to="/about">About</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/favourites">Your Songs</router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/search">Search</router-link>
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav id="navbar-links" class="align-items-center" v-if="isMobile == true">
      <b-nav-item>
        <router-link to="/about">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
            />
          </svg>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/favourites">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            />
          </svg>
        </router-link>
      </b-nav-item>
      <b-nav-item>
        <router-link to="/search">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </router-link>
      </b-nav-item>
    </b-navbar-nav>
    <div id="noteifyLogout" @click="noteifyLogout()" class="d-flex justify-content-around align-items-center">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M13,3H11V13H13V3M17.83,5.17L16.41,6.59C18.05,7.91 19,9.9 19,12A7,7 0 0,1 12,19C8.14,19 5,15.88 5,12C5,9.91 5.95,7.91 7.58,6.58L6.17,5.17C2.38,8.39 1.92,14.07 5.14,17.86C8.36,21.64 14.04,22.1 17.83,18.88C19.85,17.17 21,14.65 21,12C21,9.37 19.84,6.87 17.83,5.17Z"
        />
      </svg>
    </div>
  </b-navbar>
</template>

<style lang="scss" scoped>
#nav {
  padding: 0;
  height: 100px;
  background-color: #222f3e;
  border-bottom: 1px solid white;
  z-index: 1100;
  #app-logo {
    margin-left: 120px;
    color: white;
    @media screen and (max-width: 768px) {
      margin-left: 20px;
      h1 {
        margin: 0;
        font-size: 26px;
      }
    }
    @media screen and (min-width: 769px) and (max-width: 1366px){
      margin-left: 20px;
      h1{
        margin: 0;
        font-size: 32px;
      }
    }
  }
  #navbar-links {
    height: 100%;
    width: 400px;
    @media screen and (max-width: 700px) {
      height: auto;
      width: 150px;
    }
    @media screen and (min-width: 701px) and (max-width: 1024px) {
      height: auto;
      width: auto;
    }
  }
  a {
    color: white;
    text-decoration: none;

    & svg {
      fill: white;
    }

    &.router-link-exact-active {
      color: #00d2d3;
    }

    &.router-link-exact-active:hover {
      color: white;
    }

    &.router-link-exact-active svg {
      fill: #00d2d3;
    }

    &.router-link-exact-active:hover svg {
      fill: white;
    }
  }

  #noteifyLogout {
    margin-right: 40px;
    svg {
      width: 40px;
      height: 40px;
      fill: white;
      cursor: pointer;
      &:hover{
        fill: #ff6b6b;
      }
      @media screen and (max-width: 500px){
        width: 30px;
        height: 30px;
      }
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";
import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
export default {
  data() {
    return {
      isMobile: false
    };
  },

  mounted() {
    window.innerWidth < 700 ? (this.isMobile = true) : (this.isMobile = false);
    window.addEventListener("resize", () => {
      window.innerWidth < 700
        ? (this.isMobile = true)
        : (this.isMobile = false);
    });
  },

  methods: {
    ...mapActions({
      setUser: "userFirebaseAuth/setUser",
      initSong: "songState/initSong",
      setPrev: "songState/setPrev",
      setNext: "songState/setNext"
    }),

    noteifyLogout: async function(){
      const currentSong = {
        id: null,
        name: "",
        author: "",
        duration: "",
        album: "",
        url: "",
        img: "",
        songPlaying: false
      };

      const nextSong = {
        id: null,
        title: "",
        author: "",
        duration: "",
        album: "",
        url: "",
        img: ""
      };

      await firebase.auth().signOut().then(() => {
        this.initSong(currentSong);
        this.setPrev(nextSong);
        this.setNext(nextSong);
        this.setUser({email: null, uID: null, token: null});
        localStorage.removeItem("firebaseToken");
      }).catch(function(error) {
        console.log(error);
      });
    }
  }
};
</script>
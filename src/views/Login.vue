<template>
  <b-container fluid id="loginMain" class="d-flex justify-content-center align-items-center">
    <b-row class="d-flex justify-content-around align-items-center">
      <h1>Noteify</h1>
      <b-form
        class="d-flex flex-column justify-content-center align-items-center"
        @submit.prevent="noteifyFirebaseAuth()"
      >
        <div
          class="form-input-wrapper d-flex flex-column justify-content-center align-items-center"
        >
          <label for="emailInput">E-mail</label>
          <b-form-input
            id="emailInput"
            placeholder="Enter your e-mail..."
            :required="true"
            v-model="userCreds.email"
          ></b-form-input>
        </div>
        <div
          class="form-input-wrapper d-flex flex-column justify-content-center align-items-center"
        >
          <label for="passwordInput">Password</label>
          <b-form-input
            id="passwordInput"
            placeholder="Enter your password..."
            type="password"
            :required="true"
            v-model="userCreds.password"
          ></b-form-input>
        </div>
        <div class="login-error" v-if="error.length != 0">
          <p id="loginErrorMessage">{{error}}</p>
        </div>
        <button id="loginButton" class="d-flex justify-content-center align-items-center">
          Login
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"
            />
          </svg>
        </button>
      </b-form>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
#loginMain {
  min-height: 100vh;
  .row {
    height: 500px;
    width: 100%;
    @media screen and (min-width: 320px) and (max-width: 1024px) {
      flex-direction: column;
      flex-wrap: nowrap;
    }
    form {
      height: 100%;
      @media screen and (max-width: 1024px) {
        height: auto;
      }
      .form-input-wrapper {
        input {
          width: 400px;
          height: 50px;
          border-radius: 30px;
          text-align: center;
          border: 1px solid #222f3e;
          @media screen and (max-width: 320px) {
            width: 280px;
            height: 40px;
          }
          @media screen and (min-width: 321px) and (max-width: 768px) {
            width: 320px;
          }
        }
        label {
          font-weight: bold;
          color: white;
        }
      }
      #loginButton {
        width: 200px;
        height: 50px;
        border-radius: 30px;
        border: 1px solid #222f3e;
        outline: 0;
        background-color: #222f3e;
        border-radius: 30px;
        font-size: 18px;
        transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          color 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        color: white;
        font-weight: 500;
        &:hover {
          background-color: white;
          color: #222f3e;
          svg{
            fill:#222f3e;
            transform: translateX(10px)
          }
        }
        @media screen and (max-width: 500px){
          background-color: white;
          color: #222f3e;
          &:hover{
            background-color: #00d2d3;
          }
        }
        @media screen and (max-width: 320px) {
          width: 150px;
          height: 40px;
        }
        svg{
          fill: white;
          margin-left: 10px;
          transition: all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
          @media screen and (max-width: 500px){
            fill: #222f3e;
          }
        }
      }
      .form-input-wrapper,
      .login-error {
        width: 250px;
        margin-bottom: 30px;
      }
      .login-error {
        p {
          font-size: 14px;
          color: #ff6b6b;
          text-align: center;
        }
      }
    }
  }
  h1 {
    font-size: 75px;
    color: white;
    @media screen and (max-width: 320px) {
      font-size: 40px;
    }
    @media screen and (min-width: 321px) and (max-width: 1024px) {
      font-size: 50px;
    }
    @media screen and (max-width: 1024px){
      color: #00d2d3;
    }
  }
}
</style>

<script>
import * as firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import { mapActions } from "vuex";
export default {
  data() {
    return {
      userCreds: {
        email: "",
        password: ""
      },
      error: ""
    };
  },

  methods: {
    ...mapActions({
      setUser: "userFirebaseAuth/setUser"
    }),
    noteifyFirebaseAuth: async function() {
      let email = this.userCreds.email;
      let password = this.userCreds.password;
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password).then(
          user => {
            this.error = "";
            let userCreds = {
              email: user.email,
              uID: user.uid,
              token: user.xa
            };

            this.setUser(userCreds);
            localStorage.setItem("firebaseToken", userCreds.token);
          }
        )
        .catch(error => {
          console.log(error);
          this.error = error.message;
          this.setUser({ email: null, uID: null, token: null });
        });
    }
  }
};
</script>
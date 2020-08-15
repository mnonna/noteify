<template>
  <b-container id="aboutMain" class="d-flex align-items-center" fluid>
    <b-row class="d-flex justify-content-center align-items-center">
      <b-col
        sm="10"
        md="8"
        lg="8"
        xl="6"
        id="aboutWrapper"
        class="d-flex flex-column justify-content-center align-items-center"
      >
        <h2>About noteify app</h2>
        <p>
          Noteify is an app which lets you listen your favourite music. Search your favourites and add them to your bookmark. You can use this
          app on the desktop and your mobile phone.
          It's integrated with Genius API (Genius is worldwide known service delivering song lyrics).
          While listening song you can redirect to its lyrics and read some informations about authors.
        </p>
        <p>If you like this app you can leave us some tip :)</p>
        <button id="noteifyDonate" type="button">
          <p>Donate</p>
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
#aboutMain {
  height: 500px;
  @media screen and (max-width: 320px){
    margin-top: 80px;
    margin-bottom: 150px;
  }
  @media screen and (min-width: 321px) and (max-width: 360px){
    margin-bottom: 150px;
    margin-top: 60px;
  }
  .row {
    height: 100%;
    @media screen and (max-width: 320px){
      height: 600px;
      padding: 20px;
    }
    @media screen and (min-width: 321px) and (max-width: 360px){
      height: 500px;
      padding: 40px;
    }
    @media screen and (min-width: 361px) and (max-width: 500px){
      height: 450px;
      padding: 20px;
    }
    #aboutWrapper {
      border-radius: 30px;
      height: 100%;
      background-color: #222f3e;
      margin: 0;
      padding: 30px;
      overflow-y: auto;
      overflow-x: hidden;
      @media screen and (max-width: 500px){
        padding: 0;
      }
      &::-webkit-scrollbar {
        width: 10px;
        @media screen and (max-width: 768px) {
          display: none;
        }
      }
      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 30px 30px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: inset 0 0 30px 30px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
      }

      &::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 6px #00d2d3;
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px #00d2d3;
      }
      p:nth-of-type(2) {
        margin-top: 20px;
      }
      p,
      h2 {
        color: white;
        @media screen and (max-width: 1366px) {
          text-align: center;
        }
      }
      #noteifyDonate {
        position: relative;
        display: inline-block;
        outline: 0;
        width: 150px;
        height: 50px;
        margin-top: 20px;
        //background-color: transparent;
        border: 1px solid #00d2d3;
        background-image: linear-gradient(#00d2d3, rgb(255, 255, 255));
        background-size: 0% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        border-radius: 30px;
        transition: background-size 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          color 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        p {
          color: #222f3e;
        }
        &:hover {
          background-size: 100% 100%;
          border-color: #222f3e;
          p {
            color: #222f3e;
          }
        }
      }
    }
  }
}
</style>

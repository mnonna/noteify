<template>
  <div
    id="appPlayer"
    class="navbar fixed-bottom"
    :class="{'mobile-expand' : isExpanded == true && isMobile == true}"
  >
    <div
      id="currentSong"
      class="d-flex justify-content-between align-items-center"
      v-if="setCurrentSongData.id != null"
    >
      <p id="nowPlaying">Now playing</p>
      <div class="current-song-info d-flex justify-content-between align-items-center">
        <b-img
          id="currentSongThumbnail"
          :src="setCurrentSongData.imgPath"
          :width="100"
          :height="100"
        ></b-img>
        <div
          class="current-song-desc d-flex flex-column"
          v-if="isMobile == false || isExpanded == true"
        >
          <p id="currentSongAuthor">{{ setCurrentSongData.author }}</p>
          <p>{{ setCurrentSongData.title }}</p>
          <p>Album: "{{ setCurrentSongData.album }}"</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p id="songNoneInfo" style="color: white">
        Nothing's playing right now.
        <br />Please select some song above
      </p>
    </div>
    <playerHandler :songDuration="setCurrentSongData.duration"/>
    <div
      class="media-footer-wrapper d-flex flex-column justify-content-around align-items-center"
      v-if="isMobile == false"
    >
      <p>Meet us on</p>
      <div class="d-flex justify-content-around align-items-center">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"
          />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
          />
        </svg>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
          />
        </svg>
      </div>
      <p>2020 &copy; mnonna</p>
    </div>
    <div
      id="noteify-mobile-expand-song"
      class="d-flex justify-content-center align-items-center"
      v-if="isMobile == true"
    >
      <div
        id="mobile-song-expand-button"
        class="d-flex justify-content-center align-items-center"
        @click="expandMobileMenu"
        v-if="isExpanded == false"
      >
        <svg width="25" height="20" viewBox="0 0 24 24">
          <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
        </svg>
      </div>
      <div
        id="mobile-song-collapse-button"
        class="d-flex justify-content-center align-items-center"
        @click="collapseMobileMenu"
        v-else
      >
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#appPlayer {
  width: 100%;
  height: 120px;
  background-color: #222f3e;
  padding: 0;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  #songNoneInfo{
    margin-left: 20px;
  }
  &.mobile-expand {
    height: 100%;
    grid-template-columns: 1fr;
    align-items: self-end;
    @media screen and (max-width: 320px){
      grid-template-rows: 1fr 150px 80px;
    }
    @media screen and (min-width: 321px) and (max-width: 399px){
      grid-template-rows: 1fr 200px 80px;
    } 
    @media screen and (min-width: 400px) and (max-width: 1366px){
      grid-template-rows: 1fr 350px 100px;
    }
    #currentSong {
      justify-content: center !important;
      width: auto;
      height: auto;
      #nowPlaying {
        margin-bottom: 20px;
        @media screen and (max-width: 1366px) {
          margin: 0;
        }
      }
      p {
        color: #222f3e !important;
      }
      #currentSongAuthor {
        color: #ff6b6b !important;
      }
    }
    #playerHandler {
      justify-content: center !important;
    }
    #noteify-mobile-expand-song {
      grid-column: auto;
      align-self: flex-end;
    }
  }
  @media screen and (max-width: 320px){
    height: 120px;
  }
  @media screen and (min-width: 321px) and (max-width: 1366px) {
    height: 150px;
  }
  @media screen and (max-width: 1366px){
    background-color: #c8d6e5;
    grid-template-columns: 1fr 1fr;
  }
  .playerWrapper {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  #currentSong {
    width: 100%;
    height: 100%;
    @media screen and (max-width: 1366px) {
      flex-direction: column;
      justify-content: center !important;
      #currentSongThumbnail {
        width: 70px;
        height: 70px;
        border-radius: 50%;
      }
    }
    #nowPlaying {
      color: #00d2d3;
      margin-left: 60px;
      @media screen and (max-width: 1366px) {
        margin: 0;
        color: #222f3e;
      }
    }
    p {
      color: white;
    }
    .current-song-info {
      width: auto;
      @media screen and (max-width: 1366px){
        flex-direction: column;
      }
      .current-song-desc {
        margin-left: 20px;
        @media screen and (max-width: 1366px){
          margin: 0;
        }
        p {
          text-align: center;
        }
        #currentSongAuthor {
          color: #00d2d3;
        }
      }
    }
  }
  .media-footer-wrapper {
    height: 80px;
    width: 150px;
    p {
      color: #00d2d3;
    }
    svg {
      fill: white;
    }
    div:nth-of-type(1) {
      width: 100%;
    }
  }
  #noteify-mobile-expand-song {
    width: 100%;
    height: 20px;
    background-color: #222f3e;
    grid-column: span 2;
    svg {
      fill: white;
      cursor: pointer;
      &:hover {
        #noteify-mobile-expand-song {
          background-color: #c8d6e5;
        }
      }
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";
import playerHandler from "./PlayerHandler";
export default {
  components: {
    playerHandler
  },
  data() {
    return {
      isMobile: false,
      isExpanded: false,
      mobileSongInfoActive: false
    };
  },
  computed: {
    ...mapGetters({
      getCurrentSong: "songState/getCurrentSong"
    }),

    setCurrentSongData() {
      return {
        id: this.getCurrentSong.id ? this.getCurrentSong.id : null,
        author: this.getCurrentSong.author ? this.getCurrentSong.author : "",
        title: this.getCurrentSong.name ? this.getCurrentSong.name : "",
        duration: this.getCurrentSong.duration
          ? this.getCurrentSong.duration
          : "",
        album: this.getCurrentSong.album ? this.getCurrentSong.album : "",
        imgPath: this.getCurrentSong.img
          ? require(`../../assets/album_covers/${this.getCurrentSong.img}`)
          : ""
      };
    }
  },

  mounted() {
    window.innerWidth <= 1366 ? (this.isMobile = true) : (this.isMobile = false);
    window.addEventListener("resize", () => {
      window.innerWidth <= 1366
        ? (this.isMobile = true)
        : (this.isMobile = false);
    });
  },
  
  methods: {
    expandMobileMenu: function(){
      const playerBar = document.querySelector("#songProcessCanvas");
      this.isExpanded = true;
      playerBar.style.cssText = "bottom: 20px; top: unset";
    },
    collapseMobileMenu: function(){
      const playerBar = document.querySelector("#songProcessCanvas");
      this.isExpanded = false;
      playerBar.style.cssText = "bottom: unset; top: 0";
    }
  }
};
</script>
<template>
  <b-container class="genius-song-info-main" v-if="currentSong.id != null">
    <b-row>
      <b-col
        id="song-info-wrapper"
        class="d-flex flex-column justify-content-center align-items-center"
        cols="12"
      >
        <div class="genius-song-thumb-wrapper d-flex justify-content-around align-items-center">
          <b-img id="genius-album-img" :width="100" :height="100" :src="setImgUrl"></b-img>
          <div id="songAuthor">
            <p>{{ currentSong.author }}</p>
            <p>{{ currentSong.name }}</p>
            <p>Album: "{{ currentSong.album }}"</p>
          </div>
        </div>
        <div id="geniusMark">
          <p>Song lyrics and author's info are provided by</p>
          <h3 id="geniusTag">GENIUS</h3>
        </div>
        <div id="getLyricsBtn">
          <button>
            <a :href="getCurrentSongGeniusInfo.lyrics" target="_blank">GET LYRICS</a>
          </button>
        </div>
        <b-row id="songAuthorDesc" class="d-flex align-items-center justify-content-center">
          <h3><span style="color: white">About</span> {{ currentSong.author }}</h3>
          <article v-if="getCurrentSongGeniusInfo.artistInfo.desc != '?'">
            <p>{{getCurrentSongGeniusInfo.artistInfo.desc}}</p>
          </article>
          <article v-else>
            <p>We're sorry, but there's no description of this author in Genius API</p>
          </article>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  <b-container class="genius-song-info-main" fluid v-else>
    <b-row class="d-flex justify-content-center align-items-center">
       <b-col
        id="song-info-wrapper"
        class="d-flex flex-column justify-content-center align-items-center"
        cols="6"
      >
        <h3>Select a song and <span style="color: #ffff64;">Genius </span>will do its job</h3>
       </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.genius-song-info-main {
  padding: 20px;
  height: 100%;
  .row {
    height: 100%;
  }
  #song-info-wrapper {
    height: 100%;
    h3{
      text-align: center;
      color: white;
    }
    .genius-song-thumb-wrapper {
      margin-bottom: 30px;
      width: 320px;
      @media screen and (max-width: 320px){
        width: 280px;
      }
      #genius-album-img {
        border-radius: 50%;
        @media screen and (max-width: 320px){
          width: 70px;
          height: 70px
        }
        @media screen and (max-width: 500px){
          width: 80px;
          height: 80px;
        }
      }
      #songAuthor {
        text-align: center;
        p {
          color: white;
        }
        p:nth-of-type(1) {
          color: #00d2d3;
        }
      }
    }
    #geniusMark {
      margin-bottom: 30px;
      p,
      #geniusTag {
        font-family: "Montserrat", sans-serif;
        text-align: center;
      }
      p {
        color: white;
      }
      #geniusTag {
        color: #ffff64;
      }
    }
    #getLyricsBtn {
      button {
        margin-bottom: 30px;
        width: 200px;
        height: 50px;
        border: 1px solid #ffff64;
        background-color: transparent;
        background-image: linear-gradient(#ffff64, rgb(255, 255, 255));
        background-size: 0% 100%;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        border-radius: 30px;
        outline: 0;
        transition: background-size 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
          color 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
        @media screen and (max-width: 320px){
          width: 170px;
          height: 40px;
        }
        &:hover {
          background-size: 100% 100%;
          border: 1px solid #00d2d3;
          a {
            color: #222f3e;
          }
        }
        a {
          white-space: nowrap;
          text-decoration: none;
          color: white;
        }
      }
    }
  }
  #songAuthorDesc {
    margin-bottom: 30px;
    width: 450px;
    margin-left: 30px;
    padding-right: 30px;
    overflow-y: auto;
    overflow-x: hidden;
    @media screen and (max-width: 320px){
      width: 250px;
      margin: 0;
      padding: 10px;
    }
    @media screen and (max-width: 500px) {
      width: 350px;
      margin: 0;
      padding: 30px;
    }
    h3 {
      color: #ffff64;
      text-align: center;
    }
    &::-webkit-scrollbar {
      width: 10px;
      margin-right: 30px;
      @media screen and (max-width: 500px) {
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
    article {
      width: 100%;
      p {
        text-align: center;
        color: white;
      }
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";
export default {
  name: "geniusSongInfo",
  data() {
    return {
      songAssets: {
        url: null,
        artistDescription: null
      }
    };
  },

  computed: {
    ...mapGetters({
      getCurrentSongGeniusInfo: "geniusCurrentSongInfo/getCurrentSongLyrics",
      currentSong: "songState/getCurrentSong"
    }),

    setImgUrl: function() {
      const imgPath = this.currentSong.img
        ? require(`../../assets/album_covers/${this.currentSong.img}`)
        : "";
      return imgPath;
    }
  }
};
</script>
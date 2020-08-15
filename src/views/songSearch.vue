<template>
  <b-container fluid class="search-song-main">
    <b-row id="searchSong" class="d-flex">
      <b-col class="d-flex flex-column align-items-center">
        <h2>Search for your song</h2>
        <span for="songSearchInput" class="search-icon">
          <input
            id="songSearchInput"
            type="text"
            placeholder="Song name / artist"
            @keydown="searchSong()"
            v-model="songInputValue"
          />
        </span>
      </b-col>
    </b-row>
    <b-row
      v-if="(foundSongs || []).length !== 0"
      id="foundSongsWrapper"
      class="d-flex justify-content-center align-items-center"
    >
      <b-col class="song-search-results d-flex flex-column align-items-center" lg="6">
        <p>Songs found: {{foundSongs.length}}</p>
        <div v-for="found in foundSongs" :key="found.id">
          <songCard
            :id="found.id"
            :author="found.author"
            :title="found.title"
            :album="found.album"
            :duration="found.duration"
            :img="found.img"
            :playing="found.playing"
            :url="found.url"
            :prevSong="(found.id == 1) ? (allSongs[allSongs.length - 1]) : (allSongs[found.id - 2])"
            :nextSong="(found.id == allSongs.length) ? (allSongs[0]) : (allSongs[found.id])"
          />
        </div>
      </b-col>
    </b-row>
    <b-row v-else-if="(foundSongs || []).length === 0 && songInputValue.length > 0">
      <b-col
        class="song-search-results d-flex flex-column justify-content-around align-items-center"
      >
        <p>Not found</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.search-song-main {
  min-height: 100vh;
  #searchSong {
    margin-top: 100px;
    min-height: 150px;
    .col {
      margin-top: 50px;
      @media screen and (max-width: 500px) {
        margin-top: 0;
      }
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
    @media screen and (max-width: 1366px) {
      color: white;
    }
  }
  .search-icon {
    position: relative;
    &::after {
      content: "";
      background: url("../assets/icons/magnify.svg") no-repeat center center;
      background-size: 100% auto;
      height: 100%;
      right: 20px;
      pointer-events: none; /* important */
      position: absolute;
      top: 0;
      width: 2em;
    }
    #songSearchInput {
      width: 400px;
      height: 35px;
      border: 1px solid #222f3e;
      border-radius: 30px;
      text-align: center;
      background: transparent;
      font-family: "Montserrat", sans-serif;
      outline: 0;
      @media screen and (max-width: 320px) {
        width: 300px;
      }
      @media screen and (min-width: 321px) and (max-width: 500px) {
        width: 320px;
      }
      @media screen and (max-width: 500px) {
        border: 1px solid #00d2d3;
        color: white;
      }
    }
  }
  .song-search-results {
    overflow-x: hidden;
    overflow-y: auto;
    margin-bottom: 150px;
    height: 500px;
    &::-webkit-scrollbar {
      width: 10px;
      margin-right: 30px;
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 30px 30px rgba(0, 210, 211, 0.3);
      -webkit-box-shadow: inset 0 0 30px 30px rgba(0, 210, 211, 0.3);
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px #222f3e;
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px #222f3e;
    }
    @media screen and (max-width: 500px) {
      padding: 10px;
    }
    @media screen and (max-width: 320px) {
      height: 300px;
    }
    @media screen and (min-width: 321px) and (max-width: 500px) {
      height: 400px;
    }
    &::-webkit-scrollbar {
      @media screen and (max-width: 500px) {
        display: none;
      }
    }
    p {
      @media screen and (max-width: 1366px) {
        color: white;
      }
    }
  }
}
</style>

<script>
import { playlist } from "../playerHandlers/musicPlayerHandler";
import _ from "lodash";
import songCard from "../components/song/SongCardComponent";
export default {
  components: {
    songCard
  },
  data() {
    return {
      song: {
        song_id: this.id,
        song_title: this.title,
        song_author: this.author,
        song_duration: this.duration,
        song_url: this.url,
        song_img: this.img,
        song_album: this.album
      },
      next: this.nextSong,
      prev: this.prevSong,
      songInputValue: "",
      foundSongs: playlist,
      allSongs: playlist
    };
  },

  methods: {
    searchSong: _.debounce(function() {
      const songName = this.songInputValue;
      var songResults = playlist.filter(song => {
        return (
          song.title.toLowerCase().replace(/\s/g, "") ===
            songName.toLowerCase().replace(/\s/g, "") ||
          song.author.toLowerCase().replace(/\s/g, "") ===
            songName.toLowerCase().replace(/\s/g, "")
        );
      });

      if(songName.length == 0){
        this.foundSongs = playlist;
      }else if((songResults || []).length !== 0){
        this.foundSongs = songResults;
      }else{
        this.foundSongs = null;
      }
      console.log(this.foundSongs);
    }, 1000)
  }
};
</script>
<template>
  <b-container fluid class="favourite-songs">
    <b-row class="d-flex justify-content-around align-items-center">
      <b-col id="songsWrapper" class="d-flex flex-column align-items-center" cols="12" xl="6">
        <h2>Your favourite songs</h2>
        <b-row id="favSongs" class="d-flex justify-content-around align-items-center">
          <b-col class="d-flex flex-column align-items-center" cols="12" xl="10">
            <div v-for="song in songs" :key="song.id">
              <singleSong
                :id="song.id"
                :author="song.author"
                :title="song.title"
                :album="song.album"
                :duration="song.duration"
                :img="song.img"
                :playing="song.playing"
                :url="song.url"
                :prevSong="(song.id == 1) ? (songs[songs.length - 1]) : (songs[song.id - 2])"
                :nextSong="(song.id == songs.length) ? (songs[0]) : (songs[song.id])"
              />
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col id="songLyrics" cols="10" md="4">
        <geniusSongInfo />
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
.favourite-songs {
  height: 100%;
  margin: 0;
  padding: 0;
  @media screen and (max-width: 1366px){
    margin-top: 100px;
    margin-bottom: 150px;
  }
  .row {
    height: 100%;
    margin: 0;
    padding: 0;
    #songsWrapper,
    #songLyrics {
      height: 600px;
      border-radius: 30px;
      background-color: #222f3e;
      @media screen and (max-width: 1366px){
        background-color: transparent;
      }
    }
    #songsWrapper {
      padding: 20px;
      @media screen and (max-width: 320px){
        padding: 0;
      }
      @media screen and (max-width: 1366px) {
        margin-bottom: 50px;
      }
      #favSongs {
        width: 90%;
        overflow-y: auto;
        overflow-x: hidden;
        @media screen and (max-width: 768px){
          width: 100%;
        }
        @media screen and (min-width: 769px) and (max-width: 1366px) {
          width: 90%;
        }
        @media screen and (min-width: 1367px) and (max-width: 1600px) {
          width: 100%;
        }
        &::-webkit-scrollbar {
          width: 10px;
          margin-right: 30px;
          @media screen and (max-width: 768px){
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
      }
    }
  }
  h2 {
    text-align: center;
    color: white;
    @media screen and (max-width: 500px){
      font-size: 24px;
    }
  }
}
</style>

<script>
import singleSong from "../components/song/SongCardComponent";
import { playlist } from "../playerHandlers/musicPlayerHandler";
import geniusSongInfo from "../components/genius/geniusAPISongInfo";
export default {
  name: "Home",
  components: {
    singleSong,
    geniusSongInfo
  },
  data() {
    return {
      songs: playlist
    };
  }
};
</script>

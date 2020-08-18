<template>
  <div id="playerHandler" class="d-flex flex-column justify-content-between align-items-center">
    <div id="playerButtons" class="d-flex justify-content-between align-items-center">
      <svg
        @click="switchPrevSong"
        id="prevSong"
        class="player-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" />
      </svg>
      <svg
        v-if="getCurrentSong.songPlaying == true"
        @click="pauseSong"
        id="pauseSong"
        class="player-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
        />
      </svg>
      <svg
        v-if="getCurrentSong.songPlaying == false"
        @click="playSong"
        id="playSong"
        class="player-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"
        />
      </svg>
      <svg
        @click="switchNextSong"
        id="nextSong"
        class="player-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M16,18H18V6H16M6,18L14.5,12L6,6V18Z" />
      </svg>
      <audio
        id="audioSrc"
        :src="setSongUrlPath.urlPath"
        @timeupdate="updateSongTime"
        @ended="switchNextSong"
      ></audio>
    </div>
    <div id="songProgressIndicator">
      <p>
        <span>{{ currentTime }}</span> /
        <span>{{songDuration}}</span>
      </p>
    </div>
    <div id="songProcessCanvas">
      <canvas id="playerBar" @click="updateSongBar($event)" width="100vw" height="10px"></canvas>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#playerHandler {
  height: 70%;
  width: 220px;
  @media screen and (max-width: 1366px) {
    width: 150px;
  }
  #playerButtons {
    width: 100%;
    .player-icon {
      cursor: pointer;
      width: 30px;
      height: 30px;
      fill: #00d2d3;
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      will-change: transform;
      @media screen and (max-width: 1366px) {
        fill: #222f3e;
      }
      &:nth-of-type(2) {
        width: 50px;
        height: 50px;
      }
      &:hover {
        fill: white;
        transform: scale(1.05);
        @media screen and (max-width: 1366px) {
          fill: #00d2d3;
        }
      }
    }
  }
  #songProgressIndicator {
    p {
      span:nth-of-type(odd) {
        color: #10ac84;
      }
      span {
        color: white;
      }
      color: white;
      font-size: 20px;
      font-family: "Luckiest Guy", cursive;
    }
  }
  #songProcessCanvas {
    position: absolute;
    width: 100%;
    height: 10px;
    top: 0;
    left: 0;
    margin-top: -10px;
    background-color: white;
    #playerBar {
      cursor: pointer;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 10px;
    }
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import noteifyPlayerHandler from "../../playerHandlers/musicPlayerHandler";
import { playlist } from "../../playerHandlers/musicPlayerHandler";
export default {
  props: {
    songName: String,
    songURL: String,
    songDuration: String
  },
  data() {
    return {
      song: new noteifyPlayerHandler(),
      currentTime: "0:00",
      songs: playlist
    };
  },
  computed: {
    ...mapGetters({
      getCurrentSong: "songState/getCurrentSong",
      favs: "songState/getFavSongs"
    }),

    setSongUrlPath() {
      return {
        urlPath: this.getCurrentSong.url
          ? require(`../../../src/assets/audio/${this.getCurrentSong.url}`)
          : ""
      };
    },

    setPlaylist: function() {
      var user_playlist = [];
      if (Array.isArray(this.favs) && this.favs.length > 0) {
        this.favs.forEach(element => {
          let sng_fav = playlist.filter(single => {
            return single.id == element;
          });
          user_playlist.push(sng_fav[0]);
        });
      }else{
        user_playlist = this.songs;
      }

      return user_playlist;
    }
  },

  mounted(){

  },

  methods: {
    ...mapActions({
      setSongPlayState: "songState/setSongPlayState",
      updateSongTime: "songState/updateSongTime",
      switchPrevious: "songState/switchPrevious",
      switchNext: "songState/switchNext",
      setPrev: "songState/setPrev",
      setNext: "songState/setNext",
      setLyrics: "geniusCurrentSongInfo/setCurrentSongLyrics"
    }),
    playSong: function() {
      const audio = document.querySelector("#audioSrc");
      this.song.playSong(audio);
      this.setSongPlayState(true);
    },
    pauseSong: function() {
      const audio = document.querySelector("#audioSrc");
      this.song.pauseSong(audio);
      this.setSongPlayState(false);
    },
    updateSongTime: function() {
      const audio = document.querySelector("#audioSrc");
      const progressBar = document.querySelector("#playerBar");
      this.currentTime = this.song.updateProgressBar(audio, progressBar);
    },
    updateSongBar: function($event) {
      const audio = document.querySelector("#audioSrc");
      const progressBar = document.querySelector("#playerBar");
      this.song.barGoTo(audio, progressBar, $event);
    },
    switchPrevSong: function() {
      const audio = document.querySelector("#audioSrc");
      const currentSong = this.getCurrentSong.id;
      const currentIndex = (this.favs.length > 0) ? this.favs.indexOf(currentSong) : this.setPlaylist.findIndex(x => x.id === currentSong);
      var prevSong;
      currentIndex >= 1
        ? (prevSong = {
            id: this.setPlaylist[currentIndex - 1].id,
            title: this.setPlaylist[currentIndex - 1].title,
            author: this.setPlaylist[currentIndex - 1].author,
            duration: this.setPlaylist[currentIndex - 1].duration,
            url: this.setPlaylist[currentIndex - 1].url,
            img: this.setPlaylist[currentIndex - 1].img,
            album: this.setPlaylist[currentIndex - 1].album
          })
        : (prevSong = {
            id: this.setPlaylist[this.setPlaylist.length - 1].id,
            title: this.setPlaylist[this.setPlaylist.length - 1].title,
            author: this.setPlaylist[this.setPlaylist.length - 1].author,
            duration: this.setPlaylist[this.setPlaylist.length - 1].duration,
            url: this.setPlaylist[this.setPlaylist.length - 1].url,
            img: this.setPlaylist[this.setPlaylist.length - 1].img,
            album: this.setPlaylist[this.setPlaylist.length - 1].album
          });

      

      this.setPrev(prevSong);
      this.switchPrevious();
      setTimeout(() => {
        audio.src = this.getCurrentSong.url
          ? require(`../../../src/assets/audio/${this.getCurrentSong.url}`)
          : "";
        audio.play();
      }, 500);

      const song_info = `${this.getCurrentSong.author}${this.getCurrentSong.name}`;
      this.setLyrics(song_info);
    },
    switchNextSong: function() {
      const audio = document.querySelector("#audioSrc");
      const currentSong = this.getCurrentSong.id;
      const currentIndex = (this.favs.length > 0) ? this.favs.indexOf(currentSong) : this.setPlaylist.findIndex(x => x.id === currentSong);
      var nextSong;
      currentIndex == this.setPlaylist.length - 1
        ? (nextSong = {
            id: this.setPlaylist[0].id,
            title: this.setPlaylist[0].title,
            author: this.setPlaylist[0].author,
            duration: this.setPlaylist[0].duration,
            url: this.setPlaylist[0].url,
            img: this.setPlaylist[0].img,
            album: this.setPlaylist[0].album
          })
        : (nextSong = {
            id: this.setPlaylist[currentIndex + 1].id,
            title: this.setPlaylist[currentIndex + 1].title,
            author: this.setPlaylist[currentIndex + 1].author,
            duration: this.setPlaylist[currentIndex + 1].duration,
            url: this.setPlaylist[currentIndex + 1].url,
            img: this.setPlaylist[currentIndex + 1].img,
            album: this.setPlaylist[currentIndex + 1].album
          });
      this.setNext(nextSong);
      this.switchNext();

      setTimeout(() => {
        audio.src = this.getCurrentSong.url
          ? require(`../../../src/assets/audio/${this.getCurrentSong.url}`)
          : "";
        audio.play();
      }, 500);

      const song_info = `${this.getCurrentSong.author}${this.getCurrentSong.name}`;
      this.setLyrics(song_info);
    }
  }
};
</script>
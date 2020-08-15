<template>
  <b-card
    no-body
    class="noteify-single-song overflow-hidden flex-row justify-content-between align-items-center"
    :class="setSongClassName"
  >
    <b-row class="d-flex justify-content-around align-items-center">
      <b-col
        cols="12"
        xl="12"
        class="d-flex justify-content-between align-items-center"
        id="songCardWrapper"
      >
        <div class="song-data d-flex align-items-center">
          <b-img
            class="noteify-song-thumbnail"
            :src="require(`../../assets/album_covers/${img}`)"
            :width="70"
            :height="70"
            alt="Image"
          ></b-img>
          <div id="songCreds">
            <p>{{ author }}</p>
            <p>{{ title }}</p>
            <p>{{ album }}</p>
          </div>
        </div>
        <div class="noteify-song-card-play d-flex justify-content-around align-items-center">
          <div class="song-duration d-flex flex-column justify-content-between align-items-center">
            <p>Duration</p>
            <p>{{ duration }}</p>
          </div>
          <div class="card-play-wrapper d-flex justify-content-between align-items-center">
            <div v-if="setSongCardPlayingState == false">
              <svg
                @click="startSongPlaying"
                class="play-song"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M10,16.5L16,12L10,7.5V16.5Z"
                />
              </svg>
            </div>
            <div v-if="setSongCardPlayingState == true">
              <svg @click="pauseCardSong" width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M13,16V8H15V16H13M9,16V8H11V16H9M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"
                />
              </svg>
            </div>
          </div>
          <div class="song-like">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
          </div>
        </div>
      </b-col>
    </b-row>
  </b-card>
</template>

<style lang="scss" scoped>
.noteify-single-song {
  width: 600px;
  min-height: 100px;
  height: auto;
  background-color: #00d2d3;
  border-radius: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: #ff6b6b;
  }
  &.playing-true {
    background-color: #ff6b6b;
    box-shadow: 0 0 5px 5px #ffffff;
    min-height: 110px;
    @media screen and (max-width: 768px) {
      min-height: 130px;
    }
  }
  @media screen and (max-width: 768px) {
    min-height: 120px;
  }
  @media screen and (max-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 321px) and (max-width: 400px) {
    width: 300px;
  }
  @media screen and (min-width: 401px) and (max-width: 500px) {
    width: 350px;
  }
  @media screen and (min-width: 501px) and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 769px) and (max-width: 1366px) {
    width: 450px;
  }
  @media screen and (min-width: 1366px) and (max-width: 1600px) {
    width: 500px;
  }
  #songCardWrapper {
    @media screen and (max-width: 500px) {
      align-items: flex-start !important;
      flex-direction: column;
    }
    .song-data {
      text-align: left;
      @media screen and (max-width: 500px) {
        width: 100%;
      }
      .noteify-song-thumbnail {
        border-radius: 50%;
        @media screen and (max-width: 500px) {
          width: 50px;
          height: 50px;
        }
      }
      #songCreds {
        margin-left: 20px;
      }
      p:nth-of-type(odd) {
        color: white;
      }
    }
    .noteify-song-card-play {
      width: 170px;
      padding: 0;
      .song-like {
        justify-self: flex-end;
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        margin-top: 10px;
        justify-content: space-between;
        .card-play-wrapper {
          width: 150px;
        }
      }
      .song-duration {
        width: 70px;
        @media screen and (max-width: 320px) {
          width: 120px;
        }
        @media screen and (min-width: 321px) and (max-width: 500px) {
          width: 100px;
          flex-direction: row !important;
        }
        p {
          color: #222f3e;
          white-space: nowrap;
        }
        p:nth-of-type(even) {
          font-size: 18px;
          font-family: "Luckiest Guy", cursive;
          @media screen and (max-width: 500px) {
            font-size: 16px;
          }
        }
      }
      svg {
        width: 40px;
        height: 40px;
        cursor: pointer;
        &:hover {
          fill: white;
        }
        @media screen and (max-width: 500px) {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
  .row {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
  }
}
</style>

<script>
import { mapActions, mapGetters } from "vuex";
import noteifyPlayerHandler from "../../playerHandlers/musicPlayerHandler";
export default {
  props: {
    id: Number,
    img: String,
    author: String,
    title: String,
    album: String,
    duration: String,
    url: String,
    prevSong: Object,
    nextSong: Object
  },
  data() {
    return {
      cardSong: new noteifyPlayerHandler(),
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
      prev: this.prevSong
    };
  },

  computed: {
    ...mapGetters({
      getCurrentSong: "songState/getCurrentSong"
    }),
    setSongClassName: function() {
      var className = "";
      if (this.getCurrentSong.id == this.id) {
        className = "playing-true";
      } else {
        className = "playing-false";
      }

      return className;
    },

    setSongCardPlayingState: function() {
      let state = this.getCurrentSong.songPlaying;
      let songId = this.getCurrentSong.id;
      let cardState = false;

      if (this.song.song_id == songId && state == true) {
        let songsWrapper = document.querySelector("#favSongs");
        cardState = true;
        this.setPrev(this.prev);
        this.setNext(this.next);
        if (songsWrapper && this.$el) {
          songsWrapper.scrollTo({
            left: 0,
            top: this.$el.offsetTop - 10,
            behavior: "smooth"
          });
        }
      }

      return cardState;
    },

    switchSong: function() {
      return {
        playing: this.setSongCardPlayingState(),
        init: this.startSongPlaying()
      };
    }
  },

  async mounted() {
    let songsWrapper = document.querySelector("#favSongs");
    let state = this.getCurrentSong.songPlaying;
    let songId = this.getCurrentSong.id;
    if (this.$route.name == "Favourites") {
      await songsWrapper.scrollTo({
        left: 0,
        top:
          this.song.song_id == songId && state == true
            ? this.$el.offsetTop - 10
            : 0,
        behavior: "smooth"
      });
    }
  },

  methods: {
    ...mapActions({
      initSong: "songState/initSong",
      setSongPlayState: "songState/setSongPlayState",
      setPrev: "songState/setPrev",
      setNext: "songState/setNext",
      setLyrics: "geniusCurrentSongInfo/setCurrentSongLyrics"
    }),
    startSongPlaying: function() {
      let id = this.song.song_id;
      let title = this.song.song_title;
      let author = this.song.song_author;
      let duration = this.song.song_duration;
      let url = this.song.song_url;
      let img = this.song.song_img;
      let album = this.song.song_album;

      var song = {
        id: id,
        name: title,
        author: author,
        duration: duration,
        url: url,
        img: img,
        album: album
      };

      this.initSong(song);
      this.setPrev(this.prev);
      this.setNext(this.next);

      const audio = document.querySelector("#audioSrc");
      setTimeout(() => {
        this.setSongPlayState(true);
        this.cardSong.playSong(audio);
      }, 100);

      const song_info = `${song.author}${song.name}`;
      this.setLyrics(song_info);
    },
    pauseCardSong: function() {
      const audio = document.querySelector("#audioSrc");
      this.setSongPlayState(false);
      this.cardSong.pauseSong(audio);
    }
  }
};
</script>
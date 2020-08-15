export default {
  namespaced: true,

  state: {
    songAmmount: null,
    currentSong: {
      id: null,
      name: "",
      author: "",
      duration: "",
      album: "",
      url: "",
      img: "",
      songPlaying: false
    },
    nextSong: {
      id: null,
      name: "",
      author: "",
      duration: "",
      album: "",
      url: "",
      img: ""
    },
    previousSong: {
      id: null,
      name: "",
      author: "",
      duration: "",
      album: "",
      url: "",
      img: ""
    }
  },

  mutations: {
    INIT_SONG(state, song) {
      state.currentSong.id = song.id;
      state.currentSong.name = song.name;
      state.currentSong.author = song.author;
      state.currentSong.album = song.album;
      state.currentSong.duration = song.duration;
      state.currentSong.url = song.url;
      state.currentSong.img = song.img;
      state.currentSong.songPlaying = true;
      state.currentSong.currentTime = "0:00";
    },
    SET_SONG_PLAY_STATE(state, boolState) {
      state.currentSong.songPlaying = boolState;
    },
    INIT_SONG_AMMOUNT(state, ammount) {
      state.songAmmount = ammount;
    },
    SET_PREV(state, prev) {
      if (prev) {
        state.previousSong.id = prev.id;
        state.previousSong.name = prev.title;
        state.previousSong.author = prev.author;
        state.previousSong.album = prev.album;
        state.previousSong.duration = prev.duration;
        state.previousSong.url = prev.url;
        state.previousSong.img = prev.img;
      }
    },
    SET_NEXT(state, next) {
      if (next) {
        state.nextSong.id = next.id;
        state.nextSong.name = next.title;
        state.nextSong.author = next.author;
        state.nextSong.album = next.album;
        state.nextSong.duration = next.duration;
        state.nextSong.url = next.url;
        state.nextSong.img = next.img;
      }
    },
    SWITCH_TO_PREVIOUS(state) {
      if (state.previousSong) {
        state.currentSong.id = state.previousSong.id;
        state.currentSong.name = state.previousSong.name;
        state.currentSong.author = state.previousSong.author;
        state.currentSong.album = state.previousSong.album;
        state.currentSong.duration = state.previousSong.duration;
        state.currentSong.img = state.previousSong.img;
        (state.currentSong.url = state.previousSong.url),
          (state.currentSong.songPlaying = true);
        state.currentSong.currentTime = "0:00";
      }
    },
    SWITCH_TO_NEXT(state) {
      if (state.nextSong) {
        state.currentSong.id = state.nextSong.id;
        state.currentSong.name = state.nextSong.name;
        state.currentSong.author = state.nextSong.author;
        state.currentSong.album = state.nextSong.album;
        state.currentSong.duration = state.nextSong.duration;
        state.currentSong.img = state.nextSong.img;
        (state.currentSong.url = state.nextSong.url),
          (state.currentSong.songPlaying = true);
        state.currentSong.currentTime = "0:00";
      }
    }
  },

  getters: {
    getCurrentSong(state) {
      return state.currentSong;
    }
  },

  actions: {
    initSong({ commit }, song) {
      commit("INIT_SONG", song);
    },
    setSongPlayState({ commit }, boolState) {
      commit("SET_SONG_PLAY_STATE", boolState);
    },
    initSongAmmount({ commit }, ammount) {
      commit("INIT_SONG_AMMOUNT", ammount);
    },
    switchPrevious({ commit }) {
      commit("SWITCH_TO_PREVIOUS");
    },
    switchNext({ commit }) {
      commit("SWITCH_TO_NEXT");
    },
    setPrev({ commit }, prev) {
      commit("SET_PREV", prev);
    },
    setNext({ commit }, next) {
      commit("SET_NEXT", next);
    }
  }
};

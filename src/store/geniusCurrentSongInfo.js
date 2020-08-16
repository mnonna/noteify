import axios from "axios";

const noteifyNodeURL = "https://noteify-node-api.herokuapp.com/api";
const noteifyArtistDesc = "https://noteify-node-api.herokuapp.com/api/artist";

export default {
  namespaced: true,

  state: {
    currentSongGeniusLyrics: null,
    currentArtistInfo: {
      id: null,
      desc: null
    }
  },

  mutations: {
    SET_SONG_ASSETS(state, { url, artistID, artistDesc }) {
      state.currentSongGeniusLyrics = url;
      state.currentArtistInfo.id = artistID;
      state.currentArtistInfo.desc = artistDesc;
    }
  },

  getters: {
    getCurrentSongLyrics(state) {
      let songAssets = {
        lyrics: state.currentSongGeniusLyrics,
        artistInfo: {
          id: state.currentArtistInfo.id,
          desc: state.currentArtistInfo.desc
        }
      };
      return songAssets;
    }
  },

  actions: {
    async setCurrentSongLyrics({ commit }, songInfo) {
      var song_url = "";
      var artistID = "";
      var artistDesc = "";
      await axios
        .get(`${noteifyNodeURL}?song_info=${songInfo}`, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          console.log(response.data.songInfo);
          song_url = response.data.songInfo.songLyricsURL;
          artistID = response.data.songInfo.authorID;
        })
        .catch(error => {
          console.log(error);
        });

      await axios
        .get(`${noteifyArtistDesc}?id=${artistID}`, {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        })
        .then(response => {
          console.log(response);
          artistDesc = response.data.artistDesc;
        })
        .catch(error => {
          console.log(error);
        });

      let songAssets = {
        url: song_url,
        artistID: artistID,
        artistDesc: artistDesc
      };

      commit("SET_SONG_ASSETS", songAssets);
    }
  }
};

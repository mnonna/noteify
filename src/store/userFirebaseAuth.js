export default {
  namespaced: true,

  state: {
    currentUser: {
      email: null,
      uID: null,
      token: null
    }
  },

  mutations: {
    SET_USER(state, { email, uID, token }) {
      state.currentUser.email = email;
      state.currentUser.uID = uID;
      state.token = token;
    }
  },

  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    }
  },

  actions: {
    setUser({ commit }, userCreds) {
      commit("SET_USER", userCreds);
    }
  }
};

import { createStore } from "vuex";
import { auth } from "../firebase";

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const userCredential = await auth.signInWithEmailAndPassword(
        email,
        password,
      );
      commit("setUser", userCredential.user);
    },
    async logout({ commit }) {
      await auth.signOut();
      commit("setUser", null);
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.user;
    },
  },
  modules: {},
});

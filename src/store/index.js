import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoaded: false,
    setArtistsData: []
  },
  mutations: {
    SET_IS_LOADED(state, payload) {
      state.isLoaded = payload
    },
    SET_ARTISTS_DATA(state, payload) {
      state.setArtistsData = payload
    }
  },
  actions: {
    async GET_ARTISTS({ commit }) {
      commit('SET_IS_LOADED', false);
      const response = await fetch('http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2');
      const data = await response.json();
      commit('SET_ARTISTS_DATA', data);
      commit('SET_IS_LOADED', true);
    }
  }
})

// const store = Vue.observable({
//     isLoaded: false,
//     setArtistsData: []
// })

// export const mutations = {
//     setIsLoaded: payload => store.isLoaded = payload,
//     setArtistsData: payload => store.setArtistsData = payload
// }

// export const getters = {
//     isLoaded: () => store.isLoaded,
//     setArtistsData: () => store.setArtistsData,
// }

// export const actions = {
//     async getArtists() {
//         mutations.setIsLoaded(false)
//         const response = await fetch('http://www.json-generator.com/api/json/get/cuKKbBWWXm?indent=2');
//         const data = await response.json();
//         mutations.setArtistsData(data);
//         mutations.setIsLoaded(true);
//     }
// }

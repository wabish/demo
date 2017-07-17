import Vue from 'vue';
import Vuex from 'vuex';
import card from './card.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },

  mutations: {
    increment(state) {
      state.count += 1;
    }
  },

  modules: {
    card
  }
});

export default store;
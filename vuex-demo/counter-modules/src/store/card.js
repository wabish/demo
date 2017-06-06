const card =  {
  namespaced: true,

  state: {
    num: 0
  },

  mutations: {
    increment(state) {
      state.num += 10;
    }
  }
};

export default card;
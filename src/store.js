import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phone: ""
  },
  mutations: {},
  actions: {
    updatePhone({ state }, phone) {
      state.phone = phone;
    },
    repay() {
      console.log(`付款`);
    }
  }
});

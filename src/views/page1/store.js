import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phone: "17621153999"
  },
  mutations: {},
  actions: {
    updatePhone({ state }, phone) {
      state.phone = phone;
    },
    repay() {
      console.log(`付款`);
    },
    "bankcard:free": function() {
      console.log(`解绑银行卡...`);
    }
  }
});

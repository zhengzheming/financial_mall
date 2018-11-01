import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phone: "",
    userinfo: {},
    bankcards: []
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
    },
    "userinfo:get": function({ state, dispatch }, userinfo) {
      state.userinfo = userinfo;
      dispatch("updatePhone", userinfo.mobile);
    },
    "bankcard:list": function({ state }) {
      window.$apiService.getOwnBankCards(2).then(res => {
        state.bankcards = res.data || [];
      });
    }
  }
});

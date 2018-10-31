import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phone: "",
    userinfo: {},
    hasRepayment: false,
    repaymentDetail: {}
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
    "repayment:detail": function({ state }) {
      window.$apiService
        .getRepaymentDetail()
        .then(res => {
          state.repaymentDetail = res.data;
        })
        .catch(({ status, res }) => {
          if (status == "error") {
            state.hasRepayment = false;
            state.repaymentDetail = res.msg;
          }
        });
    }
  }
});

import Vue from "vue";
import Vuex from "vuex";
import goods from "@/services/goods";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    phone: "",
    userinfo: {},
    hasRepayment: false,
    repaymentDetail: {},
    orders: [],
    bankcards: [],
    latestBankcard: null
  },
  mutations: {
    UPDATE_PHONE(state, phone) {
      state.phone = phone;
    },
    UPDATE_USERINFO(state, userinfo) {
      state.userinfo = userinfo;
    },
    UPDATE_BANKCARDS(state, bankcards) {
      state.bankcards = bankcards;
    }
  },
  actions: {
    updatePhone({ commit }, phone) {
      commit("UPDATE_PHONE", phone);
    },
    repay(a, data) {
      return window.$apiService.repay(data);
    },
    "bankcard:free": function() {
      console.log(`解绑银行卡...`);
    },
    "userinfo:get": function({ dispatch, commit }, userinfo) {
      commit("UPDATE_USERINFO", userinfo);
      dispatch("updatePhone", userinfo.mobile);
    },
    "repayment:detail": function({ state }) {
      window.$apiService
        .getRepaymentDetail()
        .then(res => {
          state.repaymentDetail = res.data;
          state.hasRepayment = true;
        })
        .catch(({ status, res }) => {
          if (status == "error") {
            state.hasRepayment = false;
            state.repaymentDetail = res.msg;
          }
        });
    },
    "repayment:vercode": function({ state }) {
      return window.$apiService.getRepaymentVercode(state.phone);
    },
    "order:list": function({ state }) {
      window.$apiService.getOrderList().then(res => {
        if (res.code == 0) {
          state.orders = res.data.map(item => {
            const targetGoods = goods.find(
              goods => goods.goodsId == item.goods_id
            );
            return {
              ...item,
              ...targetGoods
            };
          });
        }
      });
    },
    "bankcard:list": function({ commit }) {
      window.$apiService
        .getOwnBankCards(1)
        .then(res => {
          if (res.code == 0) {
            commit("UPDATE_BANKCARDS", res.data || []);
          }
        })
        .catch(({ status }) => {
          if (status === "error") {
            commit("UPDATE_BANKCARDS", []);
          }
        });
    }
  }
});

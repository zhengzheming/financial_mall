import Vue from "vue";
import Vuex from "vuex";
import goods from "@/services/goods";

Vue.use(Vuex);

export const storeObj = {
  state: {
    phone: "",
    userinfo: {},
    hasRepayment: false,
    repaymentDetail: {},
    orders: [],
    bankcards: []
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
    },
    UPDATE_ORDER_LIST(state, orders) {
      state.orders = orders;
    },
    CHECK_REPAYMENT(state, { hasRepayment, repaymentDetail }) {
      state.hasRepayment = hasRepayment;
      state.repaymentDetail = repaymentDetail;
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
    "repayment:detail": function({ commit }) {
      return window.$apiService
        .getRepaymentDetail()
        .then(res => {
          commit("CHECK_REPAYMENT", {
            repaymentDetail: res.data,
            hasRepayment: true
          });
        })
        .catch(({ status, res }) => {
          if (status == "error") {
            commit("CHECK_REPAYMENT", {
              repaymentDetail: res.msg,
              hasRepayment: false
            });
          }
          return Promise.reject({ status, res });
        });
    },
    "repayment:vercode": function({ state }) {
      return window.$apiService.getRepaymentVercode(state.phone);
    },
    "order:list": function({ commit }) {
      window.$apiService.getOrderList().then(res => {
        if (res.code == 0) {
          const orders = res.data.map(item => {
            const targetGoods = goods.find(
              goods => goods.goodsId == item.goods_id
            );
            return {
              ...item,
              ...targetGoods
            };
          });
          commit("UPDATE_ORDER_LIST", orders);
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
};
export default new Vuex.Store(storeObj);

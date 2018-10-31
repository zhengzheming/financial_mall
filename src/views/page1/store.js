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
    orders: []
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
    }
  }
});

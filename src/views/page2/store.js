import Vue from "vue";
import Vuex from "vuex";
import { storeObj } from "@/views/page1/store";

Vue.use(Vuex);

let initStoreObj = {
  ...storeObj,
  "bankcard:list": function({ commit }) {
    window.$apiService
      .getOwnBankCards(2)
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
};
export default new Vuex.Store(initStoreObj);

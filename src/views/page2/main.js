import Vue from "vue";
import App from "../App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import VeeValidate from "vee-validate";
import zh from "@/services/verify/zh";
import "@/assets/scss/common.scss";
import "@/assets/css/bank_small_logo.css";
import "vant/lib/vant-css/index.css";
import "@/assets/scss/overide.scss";
import "@/services/interceptors";
import "@/components";
import api from "@/api";
import extendValidator from "@/services/verify";
import { Toast } from "vant";
import initInterceptor from "@/services/interceptors";
import request from "@/api/market/request";

Vue.use(Vant);

Vue.use(VeeValidate);
VeeValidate.Validator.localize("zh", zh);
extendValidator(VeeValidate.Validator);
initInterceptor(request);
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$log", { value: window.console.log });
Object.defineProperty(Vue.prototype, "$apiService", { value: api.market });

router.beforeEach((to, from, next) => {
  if (!store.state.phone && to.name !== "login") {
    Toast("请先登录");
    next({ name: "login" });
  } else {
    next();
  }
});
api.market.getUserInfo().then(res => {
  // 登录态验证
  store.dispatch("userinfo:get", res.data);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
  if (res.code != 0) {
    router.replace({ name: "login" });
  }
});
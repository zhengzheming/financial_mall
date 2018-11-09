import Vue from "vue";
import App from "./App.vue";
import Vant from "vant";
import VeeValidate from "vee-validate";
import zh from "@/services/verify/zh";
import "@/assets/scss/common.scss";
import "@/assets/css/bank_small_logo.css";
import "vant/lib/vant-css/index.css";
import "@/assets/scss/overide.scss";
import initInterceptor from "@/services/interceptors";
import "@/components";
import "@/filter";
import api from "@/api";
import extendValidator from "@/services/verify";
import { Toast } from "vant";

export default function initPage(type, request, router, store) {
  initInterceptor(request, router);
  Vue.use(Vant);
  Vue.use(VeeValidate);
  VeeValidate.Validator.localize("zh", zh);
  extendValidator(VeeValidate.Validator);
  Vue.config.productionTip = false;
  Object.defineProperty(Vue.prototype, "$log", { value: window.console.log });
  Object.defineProperty(Vue.prototype, "$apiService", { value: api[type] });
  window.$apiService = api[type];

  // 初始化操作
  router.beforeEach((to, from, next) => {
    const loginInfo = localStorage.getItem("login");
    if (!loginInfo && to.name !== "login") {
      Toast("请先登录");
      next({ name: "login" });
    } else {
      next();
    }
  });
  api[type].getUserInfo().then(res => {
    new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
    if (res.code == 0) {
      store.dispatch("userinfo:get", res.data);
    } else {
      router.replace({ name: "login" });
    }
  });
}
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
import initInterceptor from "@/services/interceptors";
import request from "@/api/mall/request";
import "@/components";
import api from "@/api";
import extendValidator from "@/services/verify";

Vue.use(Vant);
Vue.use(VeeValidate);
VeeValidate.Validator.localize("zh", zh);
extendValidator(VeeValidate.Validator);
initInterceptor(request);
Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$log", { value: window.console.log });
Object.defineProperty(Vue.prototype, "$apiService", { value: api.mall });

api.mall.getUserInfo().then(res => {
  store.dispatch("userinfo:get", res.data);
  if (res.code == 0) {
    // new Vue({
    //   router,
    //   store,
    //   render: h => h(App)
    // }).$mount("#app");
  } else {
    router.replace({ name: "login" });
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

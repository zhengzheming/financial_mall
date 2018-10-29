import Vue from "vue";
import App from "./App.vue";
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

Vue.use(Vant);

Vue.use(VeeValidate);
VeeValidate.Validator.localize("zh", zh);
extendValidator(VeeValidate.Validator);

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$log", { value: window.console.log });
Object.defineProperty(Vue.prototype, "$apiService", { value: api });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

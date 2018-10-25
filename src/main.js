import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/vant-css/index.css";
import "@/assets/scss/overide.scss";
import "@/assets/scss/common.scss";
import "@/services/interceptors";

Vue.use(Vant);

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$log", { value: window.console.log });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

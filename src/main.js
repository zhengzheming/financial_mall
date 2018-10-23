import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/vant-css/index.css";

Vue.use(Vant);

Vue.config.productionTip = false;
Object.defineProperty(Vue.prototype, "$log", { value: window.console.log });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/page2/login";
import bankCards from "@/views/page2/bankCards";
import bankcardAdd from "@/views/page2/bankCards/add";
import cardBag from "@/views/page2/cardBag/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      alias: "/"
    },
    {
      path: "/cardbag",
      name: "cardbag",
      component: cardBag
    },
    {
      path: "/bankcards",
      name: "bankcards",
      component: bankCards
    },
    {
      path: "/bankcards/add",
      name: "bankcardadd",
      component: bankcardAdd
    }
  ]
});

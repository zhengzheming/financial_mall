import Vue from "vue";
import Router from "vue-router";
import Login from "./views/login";
import Main from "@/views/main";
import Goods from "@/views/main/goods";
import My from "@/views/main/my";
import Repayment from "@/views/repayment";
import CaptchaView from "@/views/captcha";
import OrderList from "@/views/orderList";
import goodsDetail from "@/views/goodsDetail";
import goodsPay from "@/views/goodsDetail/pay";
import goodsAudit from "@/views/goodsDetail/audit";
import bankCards from "@/views/bankCards";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "login",
      component: Login
    },
    {
      path: "/home",
      name: "home",
      component: Main,
      children: [
        {
          path: "goods",
          name: "goods",
          component: Goods
        },
        {
          path: "my",
          name: "my",
          component: My
        }
      ]
    },
    {
      path: "/repayment",
      name: "repayment",
      component: Repayment
    },
    {
      path: "/captcha",
      name: "captcha",
      component: CaptchaView
    },
    {
      path: "/orderlist",
      name: "orderlist",
      component: OrderList
    },
    {
      path: "/goodsdetail",
      name: "goodsdetail",
      component: goodsDetail
    },
    {
      path: "/goodspay",
      name: "goodspay",
      component: goodsPay
    },
    {
      path: "/goodsaudit",
      name: "goodsaudit",
      component: goodsAudit
    },
    {
      path: "/bankcards",
      name: "bankcards",
      component: bankCards
    }
  ]
});

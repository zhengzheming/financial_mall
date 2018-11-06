import Vue from "vue";
import Router from "vue-router";
import Login from "@/views/page1/login";
import Main from "@/views/page1/main/index";
import Goods from "@/views/page1/main/goods";
import My from "@/views/page1/main/my";
import Repayment from "@/views/page1/repayment/index";
import CaptchaView from "@/views/page1/captcha";
import OrderList from "@/views/page1/orderList";
import goodsDetail from "@/views/page1/goodsDetail";
import goodsPay from "@/views/page1/goodsDetail/pay";
import goodsAudit from "@/views/page1/goodsDetail/audit";
import bankCards from "@/views/page1/bankCards";
import bankcardAdd from "@/views/page1/bankCards/add";

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
    },
    {
      path: "/bankcards/add",
      name: "bankcardadd",
      component: bankcardAdd
    },
    {
      path: "auth",
      name: "auth",
      beforeEnter(to) {
        const fromUrl = to.query.from_url;
        const userid = to.query.userid;
        const auth_url = process.env.VUE_APP_AUTH_URL;
        console.log(fromUrl);
        location.href = `${auth_url}?userid=${userid}&from_url=${encodeURIComponent(
          fromUrl
        )}`;
      }
    }
  ]
});

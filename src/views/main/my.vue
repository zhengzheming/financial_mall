<template>
  <div class="my">
    <my-header/>
    <van-cell-group>
      <van-cell
        v-for="(tab, index) in tabList"
        :title="tab.title"
        :value="tab.value"
        :key="index"
        :to="tab.route"
        is-link/>
    </van-cell-group>
  </div>
</template>

<script>
import MyHeader from "./header";
export default {
  name: "My",
  components: {
    MyHeader
  },
  data() {
    return {
      tabList: [
        {
          title: "还款计划",
          value: "",
          route: { name: "repayment" }
        },
        {
          title: "订单列表",
          value: "",
          route: { name: "orderlist" }
        },
        {
          title: "基本信息认证",
          value: "",
          route: ""
        },
        {
          title: "银行卡管理",
          value: "",
          route: ""
        }
      ]
    };
  }
};
</script>

<template>
  <div class="my">
    <my-header/>
    <van-cell-group>
      <van-cell
        v-for="(tab, index) in tabList"
        :title="tab.title"
        :value="tab.value"
        :key="index"
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
          url: ""
        },
        {
          title: "订单列表",
          value: "",
          url: ""
        },
        {
          title: "基本信息认证",
          value: "",
          url: ""
        },
        {
          title: "银行卡管理",
          value: "",
          url: ""
        }
      ]
    };
  }
};
</script>

<template>
  <div class="card-bag layout-grow">
    <van-tabs v-model="active">
      <van-tab title="全部"/>
      <van-tab title="未使用"/>
      <van-tab title="已使用"/>
    </van-tabs>
    <van-search
      v-model="code"
      show-action
      placeholder="请输入红包兑换码">
      <div
        slot="action"
        @click="onSearch">添加卡券</div>
    </van-search>
    <card 
      v-for="index in 2" 
      :key="index"/>
  </div>
</template>

<script>
import card from "./components/card";
export default {
  name: "CardBag",
  components: {
    card
  },
  data() {
    return {
      active: "1",
      code: ""
    };
  },
  methods: {
    onSearch() {}
  }
};
</script>

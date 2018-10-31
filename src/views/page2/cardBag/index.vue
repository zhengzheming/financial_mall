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
      <span slot="left-icon"/>
      <div
        slot="action"
        @click="onSearch">添加卡券</div>
    </van-search>
    <card
      v-for="(card, index) in cards"
      :title="card.name"
      :left="card.amount"
      :status="card.status"
      :coupon-id="card.id"
      :desc="card.remit_remark"
      :key="index"
      @success="getList"/>
    <div
      class="bar-bankcard"
      @click="$router.push({ name: 'bankcards'})">
      绑定 <br> 结算卡
    </div>
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
      active: 0,
      code: "",
      cards: []
    };
  },
  computed: {
    cardStatus() {
      const arr = ["", "0", "1"];
      return arr[this.active];
    }
  },
  watch: {
    active() {
      this.getList();
    }
  },
  created() {
    this.getList();
  },
  methods: {
    onSearch() {
      this.$apiService.addTicket(this.code).then(() => {
        this.$toast("添加成功");
        this.getList();
      });
    },
    getList() {
      this.$apiService.getCardBagList(this.cardStatus).then(res => {
        this.cards = res.data.data;
      });
    }
  }
};
</script>

<style scoped lang="scss">
.bar-bankcard {
  width: 60px;
  height: 60px;
  border: 1px solid #eee;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 13px;
}
</style>

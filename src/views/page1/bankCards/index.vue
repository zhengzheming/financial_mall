<template>
  <div class="bank-cards">
    <div class="banl-cards__list">
      <van-cell-group
        v-for="(card, index) in bankcards"
        :key="index">
        <bank-card
          :bank-code="card.pay_acc"
          :acc_id="card.acc_id"/>
      </van-cell-group>
    </div>
    <large-button
      v-if="bankcards.length == 0"
      class="bank-cards__add"
      @free="getBankcards"
      @click.native="$router.push({ name: 'bankcardadd'})">+ 添加银行卡</large-button>
  </div>
</template>

<script>
import BankCard from "./components/BankCard";
export default {
  name: "BankCards",
  components: {
    BankCard
  },
  computed: {
    bankcards() {
      return this.$store.state.bankcards;
    }
  },
  created() {
    this.getBankcards();
  },
  methods: {
    getBankcards() {
      this.$store.dispatch("bankcard:list");
    }
  }
};
</script>

<style lang="scss" scoped>
.bank-cards__add {
  position: fixed;
  width: 100%;
  top: 50%;
  margin: 0 !important;
  transform: translateY(-50%);
}
</style>

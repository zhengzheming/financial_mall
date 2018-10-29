<template>
  <div class="bank-cards">
    <div class="banl-cards__list">
      <van-cell-group>
        <bank-card/>
      </van-cell-group>
    </div>
    <large-button 
      class="bank-cards__add" 
      @click.native="$router.push({ name: 'cardadd'})">+ 添加银行卡</large-button>
  </div>
</template>

<script>
import BankCard from "./components/BankCard";
export default {
  name: "BankCards",
  components: {
    BankCard
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

<template>
  <div
    v-if="bankCode && validated"
    class="bank-cell">
    <div :class="`bank-logo ui-banklogo-s-${bank}`"/>
    {{ bankname }} {{ cardType }} <span v-if="tailNo">({{ bankCode.trim().slice(-4) }})</span>
  </div>
</template>

<script>
import banknameList from "@/services/bankname";
import cardTypeList from "@/services/cardType";
export default {
  name: "BankCell",
  props: {
    bankCode: {
      type: [String, Number],
      default: ""
    },
    tailNo: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      bankname: "",
      bank: "",
      cardType: "",
      validated: false
    };
  },
  watch: {
    bankCode: {
      handler: function() {
        if (!this.bankCode) return;
        this.$apiService.getBank(this.bankCode).then(res => {
          if (res.stat === "ok") {
            this.bankname = banknameList[res.bank];
            this.cardType = cardTypeList[res.cardType];
            this.bank = res.bank;
            this.validated = res.validated;
          } else {
            this.$toast(`获取银行卡信息失败`);
          }
        });
      },
      immediate: true
    }
  }
};
</script>

<style scoped lang="scss">
.bank-cell {
  font-size: 14px;
}
</style>

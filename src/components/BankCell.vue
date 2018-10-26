<template>
  <div class="bank-cell">
    <div :class="`bank-logo ui-banklogo-s-${bank}`"/>
    {{ bankname }} {{ cardType }} <span v-if="tailNo">({{ bankCode.slice(-4) }})</span>
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
      cardType: ""
    };
  },
  created() {
    this.$apiService.getBank(this.bankCode).then(res => {
      if (res.stat === "ok") {
        this.bankname = banknameList[res.bank];
        this.cardType = cardTypeList[res.cardType];
        this.bank = res.bank;
      } else {
        this.$toast(`获取银行卡信息失败`);
      }
    });
  }
};
</script>

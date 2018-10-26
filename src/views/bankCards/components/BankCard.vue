<template>
  <div class="bank-card bg-white justify-between">
    <div class="left">
      <bank-cell
        :bank-code="bankCode"
        :tail-no="false"/>
      <p class="bank-card__code">
        <span>
          **** **** ****
        </span>
        <span>
          {{ bankCode.slice(-4) }}
        </span>
      </p>
    </div>
    <div class="right">
      <van-button
        size="small"
        @click.native="freeCard">解绑</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BankCard",
  props: {
    bankCode: {
      type: [String, Number],
      default: "6228430120000000000"
    }
  },
  methods: {
    freeCard() {
      this.$dialog
        .confirm({
          message: "解除绑定后将无法进行还款操作，确定解绑该银行卡吗？"
        })
        .then(() => {
          this.$store.dispatch("bankcard:free");
        });
    }
  }
};
</script>

<style scope lang="scss">
.bank-card {
  font-size: 14px;
  &__code {
    margin-left: 29px;
    & > span:first-child {
      vertical-align: -2px;
    }
  }
}
</style>

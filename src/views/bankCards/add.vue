<template>
  <div class="card-add">
    <van-cell-group>
      <van-field
        v-model="name.value"
        :error-message="name.message"
        placeholder="请输入姓名"
        clearable
        label="姓名" />
      <van-field
        v-model="cardId.value"
        :error-message="cardId.message"
        placeholder="请输入身份证号"
        clearable
        label="身份证号" />
      <van-field
        v-model="cardNo.value"
        :error-message="cardNo.message"
        placeholder="请输入储蓄卡号"
        clearable
        label="储蓄卡号"
        @blur="checkBank" />
      <bank-cell
        :bank-code="bankCode"
        class="m-cell"/>
      <van-field
        v-model="phone"
        readonly
        label="手机号"
        class="align-center">
        <van-button
          slot="button"
          size="small"
          type="primary">发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="captcha.value"
        :error-message="captcha.message"
        placeholder="请输入验证码"
        clearable
        pattern="[0-9]*"
        label="验证码" />
    </van-cell-group>
    <large-button @click.native="addCard">添加银行卡</large-button>
  </div>
</template>

<script>
export default {
  name: "BankCardAdd",
  data() {
    return {
      bankCode: "",
      cardNo: {},
      name: {},
      cardId: {},
      captcha: {},
      formError: true
    };
  },
  computed: {
    phone() {
      return this.$store.state.phone;
    }
  },
  methods: {
    checkBank() {
      this.bankCode = this.cardNo;
    },
    addCard() {
      this.$dialog.alert({
        message: "你已添加银行卡"
      });
    }
  }
};
</script>

<style scoped lang="scss">
.align-center {
  /deep/ .van-cell__title {
    display: flex;
    align-items: center;
  }
}
</style>

<template>
  <div class="card-add">
    <van-cell-group>
      <van-field
        v-validate="'required'"
        v-model="name"
        :error-message="errors.first('name')"
        name="name"
        placeholder="请输入姓名"
        clearable
        label="姓名" />
      <van-field
        v-validate="'required|isCardIdTruthy'"
        v-model="cardId"
        :error-message="errors.first('cardId')"
        name="cardId"
        placeholder="请输入身份证号"
        clearable
        label="身份证号" />
      <van-field
        v-validate="'required|isCardNoTruthy'"
        v-model="cardNo"
        :error-message="errors.first('cardNo')"
        name="cardNo"
        pattern="[0-9]*"
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
        <captcha-btn slot="button"/>
      </van-field>
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-validate="'required'"
        v-model="captcha"
        :error-message="errors.first('captcha')"
        name="captcha"
        maxlength="6"
        placeholder="请输入验证码"
        clearable
        pattern="[0-9]*"
        label="验证码" />
    </van-cell-group>
    <large-button 
      :disabled="disableNext" 
      @click.native="addCard">添加银行卡</large-button>
  </div>
</template>

<script>
export default {
  name: "BankCardAdd",
  data() {
    return {
      bankCode: "",
      cardNo: "",
      name: "",
      cardId: "",
      captcha: ""
    };
  },
  computed: {
    phone() {
      return this.$store.state.phone;
    },
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    },
    isFormTrue() {
      return Object.keys(this.fields).every(key => this.fields[key].valid);
    },
    disableNext() {
      return !this.isFormTrue;
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

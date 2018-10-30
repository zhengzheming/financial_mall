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
        <captcha-btn
          slot="button"
          :info="captchaInfo"
          @sms-data="getSmsData"/>
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
      @click.native="addCardFromOrigin">添加银行卡</large-button>
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
      captcha: "",
      bank_code: "", //  银行编码
      type: "1", // 商城 or 二级市场
      seq_code: "",
      chn_id: ""
    };
  },
  computed: {
    phone() {
      return this.$store.state.phone;
    },
    userId() {
      return this.$store.state.userinfo.user_id;
    },
    isFormDirty() {
      return Object.keys(this.fields).some(key => this.fields[key].dirty);
    },
    isFormTrue() {
      return Object.keys(this.fields).every(key => this.fields[key].valid);
    },
    disableNext() {
      return !this.isFormTrue;
    },
    captchaInfo() {
      return {
        user_id: this.userId,
        user_name: this.name,
        identity: this.cardId,
        card_number: this.cardNo,
        mobile: this.phone,
        bank_code: this.bank_code,
        type: this.type
      };
    },
    bindCardInfo() {
      return {
        ...this.captchaInfo,
        sms_code: this.captcha, //短信验证码
        seq_code: this.seq_code, //发送短信请求序列码
        chn_id: this.chn_id //渠道号
      };
    }
  },
  methods: {
    checkBank() {
      this.bankCode = this.cardNo;
      this.$apiService.getBankcardInfo(this.cardNo).then(res => {
        this.bank_code = res.data.bank_code;
      });
    },
    addCard(route) {
      this.$apiService.bindCard(this.bindCardInfo).then(() => {
        this.$dialog
          .alert({
            message: "你已添加银行卡"
          })
          .then(() => {
            this.$router.push(route);
          });
      });
    },
    addCardFromOrigin() {
      this.addCard({ name: "my" });
    },
    getSmsData(data) {
      this.seq_code = data.seq_code;
      this.chn_id = data.chn_id;
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

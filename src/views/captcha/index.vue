<template>
  <div class="captcha-view">
    <div>验证码已发送至{{ phone }}</div>
    <vue-input-code
      ref="inputCode"
      :code="code"
      :success="onSuccess"
      type="number"/>
    <van-number-keyboard
      :show="true"
      @input="onKeybordInput"
      @delete="onKeybordDelete"
    />
    <div class="resend">
      <a
        href="javascript: void 0"
        class="hot-area"
        @click="getVercode">重新获取验证码</a>
    </div>
  </div>
</template>

<script>
import VueInputCode from "vue-input-code";
export default {
  name: "CaptchaView",
  components: {
    VueInputCode
  },
  props: {
    phone: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      code: []
    };
  },
  methods: {
    onSuccess(data) {
      console.log(data);
      this.$store.dispatch("repay").then(() => {
        window.hostory.back();
      });
    },
    onKeybordInput(key) {
      if (this.code.length === 6) return;
      const codeArray = this.$refs.inputCode.codeArray;
      codeArray.push(`${key}`);
      this.code.push(`${key}`);
      if (this.code.length === 6) this.onSuccess(this.code);
    },
    onKeybordDelete() {
      const codeArray = this.$refs.inputCode.codeArray;
      codeArray.pop();
      this.code.pop();
    }
  }
};
</script>

<style scoped lang="scss">
.captcha-view {
  min-height: 100vh;
  background-color: white;
  text-align: center;
  font-size: 14px;
  padding: 0 20px;
  margin-top: 100px;
  .vue_input_code {
    margin-top: 30px;
    position: relative;
    pointer-events: none;
    /deep/ .input > span.first,
    /deep/ .input > span:last-child {
      border-radius: 0;
    }
    /deep/ input {
      display: none;
    }
  }
  .resend {
    margin-top: 10px;
    a {
      color: #0089ff;
      font-size: 13px;
    }
  }
}
</style>

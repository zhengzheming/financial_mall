<template>
  <div class="login">
    <p class="title">注册/登录</p>
    <form
      ref="form"
      class="form-login"
      @input="validateAllInput">
      <van-cell-group>
        <van-field
          v-model="phone"
          class="custom-cursor"
          maxlength="11"
          type="number"
          pattern="[0-9]*"
          clearable
          placeholder="请输入手机号"
          @click="showKeyboard = true" />
      </van-cell-group>
      <van-cell-group>
        <van-field
          ref="vercode"
          v-model="vercode"
          maxlength="6"
          clearable
          placeholder="请输入短信验证码" >
          <span
            slot="button"
            :class="{disabled: disableVercode}"
            class="btn-vercode"
            @click="getVercode">{{ vercodeText }}</span>
        </van-field>
      </van-cell-group>
      <div class="error-message">{{ errMessage }}</div>
      <van-button
        :disabled="disableLogin"
        type="primary"
        size="large"
        class="btn-login">登录</van-button>
    </form>
  </div>
</template>

<script>
import api from "@/api";
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      vercode: "",
      showKeyboard: true,
      vercodeText: "获取验证码",
      disableLogin: true,
      errMessage: "",
      disableVercode: false
    };
  },
  methods: {
    onInput(key) {
      if (this.phone.length >= 11) return;
      this.phone = this.phone + key;
    },
    onDelete() {
      this.phone = this.phone.slice(0, -1);
    },
    onClose() {
      this.showKeyboard = false;
      this.$refs.vercode.$el.querySelector("input").focus();
    },
    countdown() {
      let time = 60;
      const cache = this.vercodeText;
      this.vercodeText = time + "秒";
      return new Promise(resolve => {
        const intervalId = setInterval(() => {
          time--;
          this.vercodeText = time + "秒";
          if (time < 0) {
            clearInterval(intervalId);
            this.vercodeText = cache;
            resolve();
          }
        }, 1000);
      });
    },
    getVercode() {
      if (this.disableVercode) return;
      this.disableVercode = true;
      api
        .getVercode()
        .then(() => {
          this.countdown().then(() => {
            console.log(`倒计时完毕`);
            this.disableVercode = false;
          });
        })
        .catch(() => {
          this.disableVercode = false;
        });
    },
    validateAllInput() {
      const validateMap = {
        phone: () =>
          /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/.test(
            this.phone
          ),
        vercode: () => !!this.vercode
      };
      const errMessage = {
        phone: "请输入正确的手机号码",
        vercode: "请输入验证码"
      };
      const passValidatation = ["phone", "vercode"].every(key => {
        const fieldPassValidation = validateMap[key]();
        if (!fieldPassValidation) this.errMessage = errMessage[key];
        return fieldPassValidation;
      });
      if (passValidatation) this.errMessage = "";
      this.disableLogin = !passValidatation;
    }
  }
};
</script>

<style scoped lang="scss">
.title {
  color: #333333;
  font-size: 20px;
}
.form-login {
  padding: 0 35px;
  /deep/ input {
    &::-webkit-input-placeholder {
      color: #cccccc;
    }
  }
}
.login {
  position: relative;
  text-align: center;
  min-height: 100vh;
  background: white;
  .van-hairline--top-bottom::after {
    border-width: 0 0 2px;
  }
  .van-cell {
    padding-left: 0;
    padding-right: 0;
  }
  .btn-login {
    margin-top: 50px;
  }
  .btn-vercode {
    color: $color-theme;
  }
  .custom-cursor input::after {
    content: "|";
  }
  .error-message {
    color: red;
    position: absolute;
    bottom: 74px;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 14px;
  }
}
</style>

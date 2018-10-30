<template>
  <div class="login">
    <p class="title">注册/登录</p>
    <form
      ref="form"
      class="form-login">
      <van-cell-group>
        <van-field
          v-validate="'required|isPhoneTruthy'"
          v-model="phone"
          :error-message="errors.first('phone')"
          class="custom-cursor"
          name="phone"
          maxlength="11"
          type="number"
          pattern="[0-9]*"
          clearable
          placeholder="请输入手机号" />
      </van-cell-group>
      <van-cell-group>
        <van-field
          v-validate="'required'"
          ref="vercode"
          v-model="vercode"
          :error-message="errors.first('vercode')"
          name="vercode"
          maxlength="6"
          clearable
          placeholder="请输入短信验证码" >
          <captcha-btn
            slot="button"
            :phone="phone"/>
        </van-field>
      </van-cell-group>
      <van-button
        :disabled="!isFormTrue"
        type="primary"
        size="large"
        class="btn-login"
        @click.prevent="login">登录</van-button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      phone: "",
      vercode: "",
      errMessage: ""
    };
  },
  computed: {
    isFormTrue() {
      return Object.keys(this.fields).every(key => this.fields[key].valid);
    }
  },
  methods: {
    login() {
      this.$apiService.login(this.phone, this.vercode).then(() => {
        this.$apiService.getUserInfo().then(res => {
          if (res.code == 0) {
            this.$store.dispatch("userinfo:get", res.data);
            this.$router.push({ name: "goods" });
          } else {
            this.$toast(res.msg);
          }
        });
      });
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
  padding-top: 100px;
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

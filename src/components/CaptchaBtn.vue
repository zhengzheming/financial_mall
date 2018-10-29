<template>
  <span
    :class="{disabled: disableVercode}"
    class="btn-vercode"
    @click="getVercode">{{ vercodeText }}</span>
</template>

<script>
export default {
  name: "CaptchaBtn",
  props: {
    phone: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      disableVercode: false,
      vercodeText: "获取验证码"
    };
  },
  methods: {
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
      this.$apiService
        .getVercode(this.phone)
        .then(() => {
          this.countdown().then(() => {
            this.disableVercode = false;
          });
        })
        .catch(() => {
          this.disableVercode = false;
        });
    }
  }
};
</script>

<style scoped lang="scss">
.btn-vercode {
  color: $color-theme;
}
</style>

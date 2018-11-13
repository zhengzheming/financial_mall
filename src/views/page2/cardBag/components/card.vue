<template>
  <div
    :class="{ used, waiting}"
    class="m-card bg-white mt-gap">
    <div class="left">
      ￥{{ left | formatCurrency }}
    </div>
    <div class="middle">
      <div class="middle__title">
        加油卡
      </div>
      <div
        v-if="waiting"
        class="middle__desc">
        预计2小时内到账
      </div>
    </div>
    <div class="right">
      <span v-if="waiting">转让中</span>
      <span v-else-if="used">已使用</span>
      <van-button
        v-else
        type="primary"
        size="mini"
        @click="sellTicket">转卖</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MCard",
  props: {
    left: {
      type: String,
      default: "800"
    },
    title: {
      type: String,
      default: "加油卡"
    },
    desc: {
      type: String,
      default: "预计2小时内到账"
    },
    status: {
      type: String,
      default: "2"
    },
    couponId: {
      type: String,
      default: ""
    }
  },
  computed: {
    waiting() {
      return this.status == 1;
    },
    used() {
      return this.status == 2;
    }
  },
  methods: {
    sellTicket() {
      this.$apiService.sellTicket(this.couponId).then(res => {
        if (res.code == 0) {
          this.$toast("转卖成功");
          this.$emit("success");
        } else if (res.code == 2002) {
          this.$dialog
            .alert({
              title: "提示",
              message: "暂未绑卡，无法进行转卖操作，请先进行绑卡操作"
            })
            .then(() => {
              this.$router.push({ name: "bankcardadd" });
            });
        } else {
          this.$toastr(res.msg);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.m-card {
  display: flex;
  font-size: 14px;
  &:not(.waiting) {
    align-items: center;
  }
  .left {
    width: 80px;
    font-size: 16px;
    color: red;
  }
  .middle {
    width: 100%;
    &__desc {
      font-size: 13px;
      color: red;
      margin-top: 5px;
    }
  }
  .right {
    text-align: right;
    width: 80px;
  }
  &.used {
    color: #dcdcdc;
    .left {
      color: #dcdcdc;
    }
  }
}
</style>

<template>
  <div class="goods-detail">
    <header class="goods-detail__banner">
      <img
        :src="item.imageUrl"
        alt="">
    </header>
    <div class="goods-detail__title bg-white">
      <p style="font-weight: bold; font-size: 15px;">{{ item.title }}</p>
      <p>{{ item.desc }}</p>
      <p class="emp">￥{{ item.price }}</p>
    </div>
    <div class="goods-detail__desc bg-white">
      <div style="font-size: 14px; margin-bottom: 10px;">商品详情</div>
      <div style="padding: 0 10px;">
        <span
          v-for="(text, index) in item.detail"
          :key="index">{{ text }} <br></span>
      </div>
    </div>
    <div class="goods-detail__amount bg-white justify-between">
      <span class="left">商品总价</span>
      <span class="right emp">￥{{ item.price }}</span>
    </div>
    <footer>
      <large-button @click.native="buy(item)">立即购买</large-button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  computed: {
    item() {
      return this.$route.query;
    },
    userinfo() {
      return this.$store.state.userinfo;
    }
  },
  methods: {
    buy(item) {
      if (!this.validate()) return;
      this.$router.push({
        name: "goodspay",
        query: item
      });
    },
    validate() {
      const type = {
        auth_flag: "auth",
        has_wait_check_order: "auditing",
        has_wait_repay_order: "refund"
      };
      if (!this.userinfo.auth_flag) {
        this.showErr(type["auth_flag"]);
        return false;
      }
      if (this.userinfo.has_wait_check_order) {
        this.showErr(type["has_wait_check_order"]);
        return false;
      }
      if (this.userinfo.has_wait_repay_order) {
        this.showErr(type["has_wait_repay_order"]);
        return false;
      }
      return true;
    },
    showErr(type) {
      const messageMap = {
        auth: {
          content: "暂未完成认证，请先进行认证",
          confirmText: "立即认证",
          callback: () => {
            const loginInfo = JSON.parse(localStorage.getItem("login"));
            this.$router.push({
              name: "auth",
              query: {
                userid: this.userinfo.user_id,
                token: loginInfo.token
              }
            });
            console.log(`暂未完成认证`);
          }
        },
        auditing: {
          content: "你有审核中的订单，暂时无法发起新的订单，请等待审核结果",
          callback: () => {
            this.$router.push({ name: "orderlist" });
            console.log(`你有审核中的订单`);
          }
        },
        refund: {
          content: "你有一笔未还款的订单，请先还款后再进行购买操作",
          confirmText: "立即还款",
          callback: () => {
            this.$router.push({ name: "repayment" });
            console.log(`你有一笔未还款的订单`);
          }
        }
      };
      const whichError = type;
      this.$dialog
        .confirm({
          message: messageMap[whichError].content,
          showConfirmButton: !!messageMap[whichError].confirmText,
          confirmButtonText: messageMap[whichError].confirmText
        })
        .then(() => {
          const fn = messageMap[whichError].callback || function() {};
          fn();
        });
    }
  }
};
</script>

<style scoped lang="scss">
.goods-detail {
  font-size: 14px;
  &__title {
    font-size: 14px;
  }
  &__banner {
    height: 300px;
    display: flex;
    background-color: white;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__desc {
    margin: 10px 0;
    font-size: 13px;
  }
}
</style>

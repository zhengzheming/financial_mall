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
      this.showErr("auth");
      return false;
    },
    showErr(type) {
      const messageMap = {
        auth: {
          content: "暂未完成认证，请先进行认证",
          confirmText: "立即认证"
        },
        auditing: {
          content: "你有审核中的订单，暂时无法发起新的订单，请等待审核结果"
        },
        refund: {
          content: "你有一笔未还款的订单，请先还款后再进行购买操作",
          confirmText: "立即还款"
        }
      };
      const whichError = type;
      this.$dialog.confirm({
        message: messageMap[whichError].content,
        showConfirmButton: !!messageMap[whichError].confirmText,
        confirmButtonText: messageMap[whichError].confirmText
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

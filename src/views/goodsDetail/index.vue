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
      this.$router.push({
        name: "goodspay",
        query: item
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

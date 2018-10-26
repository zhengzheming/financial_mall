<template>
  <div class="goods">
    <router-link
      v-for="(item, index) in goods"
      :key="index"
      :to="{ name: 'goodsdetail', query: item }"
      class="link">
      <van-card
        :thumb="item.imageUrl"
        :price="item.price"
        :desc="item.subtitle"
        :title="item.title"
        num="1"
      />
    </router-link>
  </div>
</template>

<script>
import goods from "@/services/goods";
export default {
  name: "Goods",
  data() {
    return {
      goods: goods
    };
  }
};
</script>

<style scoped lang="scss">
.link {
  display: block;
}
.link + .link {
  margin-top: 10px;
}
</style>

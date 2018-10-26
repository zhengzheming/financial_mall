<template>
  <div class="order-list">
    <order-card
      v-for="(item, index) in orders"
      :title="item.title"
      :desc="item.desc"
      :price="item.price"
      :image-url="item.imageUrl"
      :status="item.status"
      :key="index"/>
  </div>
</template>

<script>
import orderCard from "./orderCard";
import goods from "@/services/goods";
export default {
  name: "OrderList",
  components: {
    orderCard
  },
  data() {
    return {
      orders: goods
    };
  }
};
</script>

<style lang="scss" scoped>
.order-list {
  overflow: hidden;
}
</style>

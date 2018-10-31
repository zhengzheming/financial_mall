<template>
  <div class="order-list">
    <order-card
      v-for="(item, index) in orders"
      :title="item.title"
      :desc="item.desc"
      :price="item.price"
      :image-url="item.imageUrl"
      :status="item.status_name"
      :order_id="item.order_id"
      :order="item"
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
      goods
    };
  },
  computed: {
    orders() {
      return this.$store.state.orders;
    }
  }
};
</script>

<style lang="scss" scoped>
.order-list {
  overflow: hidden;
}
</style>

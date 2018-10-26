<template>
  <div class="goods-pay">
    <van-cell-group>
      <van-card
        :thumb="item.imageUrl"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        num="1"
      />
    </van-cell-group>
    <van-cell-group>
      <van-cell
        title="订单金额"
        value="￥1000" />
    </van-cell-group>

    <van-cell-group>
      <van-cell
        title="预计到期还款日"
        value="内容" />
      <van-cell
        title="利息"
        value="内容" />
      <van-cell
        title="管理费"
        value="内容" />
      <van-cell
        title="逾期管理费"
        value="内容" />
    </van-cell-group>
    <large-button>立即支付 1000.00 元</large-button>
  </div>
</template>

<script>
export default {
  name: "GoodsPay",
  props: {
    payInfo: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    item() {
      return this.$route.query;
    }
  }
};
</script>

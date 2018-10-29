<template>
  <div class="order-card">
    <van-cell-group>
      <van-cell
        :value="status"
        title="订单编号："/>
      <van-card
        :thumb="imageUrl"
        :price="price"
        :desc="desc"
        :title="title"
        num="1"
      />
      <footer class="order-card__footer">
        <div class="order-card__count">
          共1件商品 小计: <span class="emp">￥{{ price }}</span>
        </div>
        <div class="order-card__tips">
          兑换码：122HSWW22     <span class="emp">（未使用）</span>
          <br>
          如需转卖，请登录“https：………………“
          <br>
          如需兑换，请下载“加油宝”App进行兑换
        </div>
      </footer>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  props: {
    imageUrl: {
      type: String,
      default: ""
    },
    price: {
      type: String,
      default: "1000"
    },
    status: {
      type: String,
      default: "审核中"
    },
    title: {
      type: String,
      default: "标题"
    },
    desc: {
      type: String,
      default: "描述"
    }
  }
};
</script>

<style scoped lang="scss">
.order-card {
  background-color: white;
  margin: 10px;
  font-size: 14px;
  &__count {
    text-align: right;
    @include border1px(top);
  }
  &__footer > * {
    padding: 10px 15px;
  }
  &__tips {
    font-size: 14px;
    @include border1px(top);
  }
  .emp {
    color: red;
  }
  .van-card:not(:first-child) {
    margin-top: 0;
  }
}
</style>

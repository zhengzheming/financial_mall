<template>
  <div class="repayment">
    <van-cell-group>
      <van-cell
        title=""
        value="3180.00">
        <template slot="title">
          <span class="title-fixed">待还金额</span>
          <van-button
            size="mini"
            class="repayment__detail">详情</van-button>
        </template>
      </van-cell>
      <van-cell
        title="到期还款日"
        value="2018-10-14">
        <template slot="title">
          <span class="title-fixed">到期还款日</span>
          <span
            class="repayment__outdate">已逾期1天</span>
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell
        title="到账时间"
        value="预计实时到账"/>
      <van-cell
        title="还款金额"
        value="3180.00"/>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: "Repayment",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.repayment {
  .van-cell__title {
    display: flex;
    align-items: center;
  }
}
</style>
<style scoped lang="scss">
.repayment {
  &__detail {
  }
  .title-fixed {
    display: inline-block;
    width: 80px;
  }
  &__outdate {
    color: red;
  }
}
</style>

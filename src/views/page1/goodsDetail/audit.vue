<template>
  <div class="goods-audit">
    <div
      v-if="query.status === 'success'"
      class="goods-audit__success">
      <van-icon
        name="success"
        size="40px"
        class="goods-audit__status-icon" />
      <p class="goods-audit__tips">成功提交审核，请留意系统下发的短信通知</p>
      <van-cell-group class="goods-audit__info">
        <van-cell
          :value="repayInfo.amount"
          title="支付金额" />
        <van-cell
          title="支付方式"
          value="信用支付" />
        <van-cell
          :value="repayInfo.repay_date"
          title="预计到期还款日" />
        <van-cell
          :value="repayInfo.interest"
          title="利息" />
        <van-cell
          :value="repayInfo.management_fee"
          title="管理费" />
        <van-cell
          :value="repayInfo.overdue_fee"
          title="逾期管理费" />
      </van-cell-group>
    </div>
    <div
      v-else
      class="goods-audit__fail">
      <van-icon
        name="fail"
        size="40px"
        class="goods-audit__status-icon" />
      <p class="goods-audit__status-text">购买失败！您未能通过系统审核</p>
      <p class="goods-audit__tips">频繁操作将影响成功率，建议您7天后再试</p>
    </div>
    <large-button @click.native="$router.push({ name: 'goods'})">返回首页</large-button>
  </div>
</template>

<script>
export default {
  name: "GoodsAudit",
  computed: {
    query() {
      return this.$route.query;
    },
    repayInfo() {
      return this.query.repayInfo;
    }
  }
};
</script>

<style scoped lang="scss">
.goods-audit {
  text-align: center;
  padding-top: 100px;
  &__tips {
    color: #999;
    font-size: 13px;
    margin-top: 5px;
  }
  &__status-icon {
    margin-bottom: 30px;
  }
  &__info {
    margin-top: 20px;
  }
  .van-cell {
    text-align: left;
  }
  &__success {
    .goods-audit__status-icon {
      color: #4bcc62;
    }
  }
  &__fail {
    .goods-audit__status-icon {
      color: #ffc147;
    }
  }
}
</style>

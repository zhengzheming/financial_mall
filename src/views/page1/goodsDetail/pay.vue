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
        :value="repayInfo.amount"
        title="订单金额" />
    </van-cell-group>

    <van-cell-group>
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
    <large-button @click.native="pay">立即支付 {{ repayInfo.amount }} 元</large-button>
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
  data() {
    return {
      repayInfo: {}
    };
  },
  computed: {
    item() {
      return this.$route.query;
    }
  },
  created() {
    this.$apiService.repayTrialDetail(this.item.goodsId).then(res => {
      this.repayInfo = res.data;
    });
  },
  methods: {
    pay() {
      this.$apiService
        .addOrder(this.item.goodsId)
        .then(res => {
          let status;
          if (res.code == 0) {
            status = "success";
          } else {
            status = "fail";
          }
          this.$router.push({
            name: "goodsaudit",
            query: {
              status,
              repayInfo: this.repayInfo
            }
          });
        })
        .catch(({ res }) => {
          this.$toast(res.msg);
        });
    }
  }
};
</script>

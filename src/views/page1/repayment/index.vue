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
            class="repayment__detail"
            @click="showDetailDialog">详情</van-button>
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
    <van-panel title="还款方式">
      <div class="repayment__ways">
        <bank-cell :bank-code="cardNo"/>
      </div>
    </van-panel>
    <div class="btn-repay">
      <large-button @click.native="repay">立即还款</large-button>
    </div>
    <div class="tips">
      保持良好的还款记录有助于提升您的信用额度
    </div>
    <van-dialog
      v-model="detailDialogShown"
    >
      <div
        v-for="(cell, index) in dialogContent"
        :key="index"
        class="m-cell">
        <div class="first">
          {{ cell.first }}
        </div>
        <div class="second">
          {{ cell.second }}
        </div>
        <div class="third">
          {{ cell.third }}
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  name: "Repayment",
  data() {
    return {
      cardNo: "6228430120000000000",
      detailDialogShown: false,
      dialogContent: [
        {
          first: "2018-10-14",
          second: "本金",
          third: "3000.00"
        },
        {
          first: "2018-10-14",
          second: "本金",
          third: "3000.00"
        },
        {
          first: "2018-10-14",
          second: "预期利息",
          third: "3000.00"
        }
      ]
    };
  },
  computed: {
    repaymetDetail() {
      return this.$store.state.repaymentDetail;
    }
  },
  methods: {
    getVercode() {
      return this.$apiService.getRepaymentVercode();
    },
    repay() {
      this.getVercode(this.$store.state.phone).then(() => {
        this.$router.push({ name: "captcha" });
      });
    },
    showDetailDialog() {
      this.detailDialogShown = true;
    }
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
  &__ways {
    padding: 10px 15px;
    font-size: 14px;
  }
  .btn-repay {
    padding: 0 20px;
    margin-top: 30px;
  }
  .tips {
    color: #999;
    font-size: 13px;
    margin-top: 10px;
    text-align: center;
  }
  .m-cell {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    box-sizing: border-box;
    line-height: 24px;
    background-color: #fff;
    color: #333;
    font-size: 14px;
    overflow: hidden;
    position: relative;
    &:not(:last-child)::after {
      content: " ";
      position: absolute;
      pointer-events: none;
      box-sizing: border-box;
      left: 4vw;
      right: 0;
      bottom: 0;
      transform: scaleY(0.5);
      border-bottom: 1px solid #eee;
    }
  }
}
</style>

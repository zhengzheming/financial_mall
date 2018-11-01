<template>
  <div class="my">
    <my-header/>
    <van-cell-group>
      <van-cell
        v-for="(tab, index) in tabList"
        :title="tab.title"
        :value="tab.value"
        :key="index"
        :to="tab.route"
        :url="tab.url"
        is-link
        @click="tabJump(tab)"/>
    </van-cell-group>
  </div>
</template>

<script>
import MyHeader from "./header";
export default {
  name: "My",
  components: {
    MyHeader
  },
  data() {
    return {
      tabList: [
        {
          title: "还款计划",
          value: "",
          callback: () => {
            if (!this.hasRepayment) {
              return this.$toast(this.repaymentMsg);
            }
            this.$router.push({ name: "repayment" });
          }
        },
        {
          title: "订单列表",
          value: "",
          callback: () => {
            if (this.orders.length == 0) {
              return this.$toast("暂无订单");
            }
            this.$router.push({ name: "orderlist" });
          }
        },
        {
          title: "基本信息认证",
          value: "",
          route: ""
        },
        {
          title: "银行卡管理",
          value: "",
          route: { name: "bankcards" }
        }
      ]
    };
  },
  computed: {
    auth() {
      //  实名认证
      return this.userinfo.auth_flag;
    },
    bankcards() {
      return this.$store.state.bankcards;
    },
    userinfo() {
      return this.$store.state.userinfo;
    },
    authTab() {
      return this.tabList.find(tab => tab.title === "基本信息认证");
    },
    bankcardTab() {
      return this.tabList.find(tab => tab.title === "银行卡管理");
    },
    hasRepayment() {
      return this.$store.state.hasRepayment;
    },
    repaymentMsg() {
      return !this.hasRepayment ? this.$store.state.repaymentDetail : "";
    },
    orders() {
      return this.$store.state.orders;
    }
  },
  watch: {
    auth(val) {
      if (val) {
        this.authTab.value = "已认证";
      } else {
        this.authTab.url = "https://www.baidu.com";
      }
    },
    bankcards() {
      this.bankcardTab.value = "";
    }
  },
  created() {
    if (this.auth) {
      this.authTab.value = "已认证";
    } else {
      this.authTab.url = "https://www.baidu.com";
    }
    this.$store.dispatch("repayment:detail");
    this.$store.dispatch("order:list");
    this.$store.dispatch("bankcard:list");
  },
  methods: {
    tabJump(tab) {
      if (tab.callback) {
        tab.callback();
      }
    }
  }
};
</script>

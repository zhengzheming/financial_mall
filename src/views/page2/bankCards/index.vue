<script>
import bankcards from "@/views/page1/bankCards/index";
export default {
  name: "BankCards",
  mixins: [bankcards],
  methods: {
    getBankcards() {
      this.$apiService.getOwnBankCards(2).then(res => {
        this.bankcards = res.data || [];
      });
    }
  }
};
</script>

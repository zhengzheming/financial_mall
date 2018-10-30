<script>
import BankCardAdd from "@/views/page1/bankCards/add";
export default {
  mixins: [BankCardAdd],
  data() {
    return {
      type: "2"
    };
  },
  methods: {
    addCardFromOrigin() {
      this.addCard({ name: "cardbag" });
    }
  }
};
</script>

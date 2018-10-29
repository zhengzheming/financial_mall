<script>
import login from "@/views/page1/login/index";
export default {
  name: "Login",
  mixins: [login],
  methods: {
    login() {
      this.$apiService.login(this.phone, this.vercode).then(() => {
        this.$router.push({ name: "goods" });
      });
    }
  }
};
</script>

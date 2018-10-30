<script>
import login from "@/views/page1/login/index";
export default {
  name: "Login",
  mixins: [login],
  methods: {
    login() {
      this.$apiService.login(this.phone, this.vercode).then(() => {
        this.$apiService.getUserInfo().then(res => {
          if (res.code == 0) {
            console.log(res.data);
            this.$store.dispatch("userinfo:get", res.data);
            this.$router.push({ name: "cardbag" });
          } else {
            this.$toast(res.msg);
          }
        });
      });
    }
  }
};
</script>

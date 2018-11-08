<script>
import login from "@/views/page1/login/index";
export default {
  name: "Login",
  mixins: [login],
  data() {
    return {
      to: "cardbag"
    };
  }
};
</script>

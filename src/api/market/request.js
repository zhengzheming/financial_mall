import axios from "axios";

const instance = axios.create({
  baseURL: "/exchange"
});
instance.defaults.headers.common["hello"] = "exchange";

export default instance;

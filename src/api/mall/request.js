import axios from "axios";

const instance = axios.create({
  baseURL: "/mall"
});
instance.defaults.headers.common["hello"] = "mall";

export default instance;

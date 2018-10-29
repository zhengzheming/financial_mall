import axios from "axios";

axios.defaults.baseURL = "/mall";
axios.defaults.headers.common["hello"] = "mall";

export default axios;

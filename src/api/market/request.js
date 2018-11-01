import axios from "axios";

const instance = axios.create({
  baseURL: "/exchange",
  headers: {
    common: {
      "X-REQUEST-FROM": "exchange"
    }
  }
});

export default instance;

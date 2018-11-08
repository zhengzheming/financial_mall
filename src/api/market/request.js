import axios from "axios";
import requestWrap from "@/api/requestWrap";

const instance = axios.create({
  baseURL: "/exchange",
  headers: {
    common: {
      "X-REQUEST-FROM": "exchange"
    }
  }
});

const request = function(config) {
  return requestWrap(config, instance, "exchange");
};
export default request;

import axios from "axios";
import requestWrap from "@/api/requestWrap";

const instance = axios.create({
  baseURL: "/mall",
  headers: {
    common: {
      "X-REQUEST-FROM": "mall"
    }
  }
});

const request = function(config) {
  return requestWrap(config, instance, "mall");
};
export default request;

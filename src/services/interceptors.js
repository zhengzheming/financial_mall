import request from "axios";
import { Toast } from "vant";

request.interceptors.response.use(response => {
  const res = response.data;
  const config = response.config;
  const inWhitelist = ["alipay"].some(key => {
    return new RegExp(key).test(config.url);
  });
  if (res.status != 0 && !inWhitelist) {
    Toast(res.data);
  }
  return res;
});

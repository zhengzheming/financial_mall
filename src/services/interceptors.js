import { Toast } from "vant";

export default function initInterceptor(request) {
  request.interceptors.response.use(response => {
    const res = response.data;
    const config = response.config;
    const inWhitelist = ["alipay", "getInfo"].some(key => {
      return new RegExp(key).test(config.url);
    });
    if (!inWhitelist && res.code != 0) {
      Toast(res.msg);
      return Promise.reject("status:error");
    }
    return res;
  });
}

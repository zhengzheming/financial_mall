import { Toast } from "vant";

export default function initInterceptor(request, router) {
  request.interceptors.response.use(response => {
    const res = response.data;
    const config = response.config;
    const inWhitelist = ["alipay", "getInfo"].some(key => {
      return new RegExp(key).test(config.url);
    });
    if (!inWhitelist && res.code != 0) {
      if (res.code == 2002) {
        return res;
      } else if (res.code == 90100) {
        router.push({ name: "login" });
      }
      Toast(res.msg);
      return Promise.reject("status:error");
    }
    return res;
  });
}

import { Toast } from "vant";

export default function initInterceptor(request, router) {
  request.interceptors.response.use(response => {
    const res = response.data;
    const config = response.config;
    const inWhitelist = ["alipay", "getInfo"].some(key => {
      return new RegExp(key).test(config.url);
    });
    if (!inWhitelist && res.code != 0) {
      // 异常处理
      const isSpecUrl = ["/loan/replayPlanDetail"].some(key => {
        return new RegExp(key).test(config.url);
      });
      if (isSpecUrl) {
        //  对特定接口的异常处理
        return Promise.reject({
          status: `error`,
          res: res
        });
      } else if (res.code == 90100) {
        // 请登录
        router.push({ name: "login" });
      }
      Toast(res.msg);
      return Promise.reject({
        status: `error`,
        res: res
      });
    }
    return res;
  });
}

import { Toast } from "vant";

export default function initInterceptor(request, router) {
  request.interceptors.response.use(response => {
    const res = response.data;
    const config = response.config;
    const requestData = JSON.parse(config.data || "{}");
    const inWhitelist = ["alipay", "getInfo"].some(key => {
      return (
        new RegExp(key).test(config.url) ||
        new RegExp(key).test(requestData.cmd)
      );
    });
    if (!inWhitelist && res.code != 0) {
      // 异常处理
      const isSpecCmd = [
        "loan.replayPlanDetail",
        "bankCard.getBindBankCard"
      ].some(key => {
        return new RegExp(key).test(requestData.cmd);
      });
      if (isSpecCmd) {
        //  对特定接口的异常处理
        return Promise.reject({
          status: `error`,
          res: res
        });
      } else if (res.code == 10000008) {
        // 请登录
        router.push({ name: "login" });
        res.msg = "请登录";
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

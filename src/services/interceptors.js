import { Toast } from "vant";

export default function initInterceptor(request, router) {
  request.interceptors.response.use(response => {
    const res = response.data;
    const config = response.config;
    const inWhitelist = ["alipay", "getInfo"].some(key => {
      return new RegExp(key).test(config.url);
    });
    if (!inWhitelist && res.code != 0) {
      if (["90301", "90400", 2002].includes(res.code)) {
        //  异常状态码特定处理, 2002: 未绑定银行卡
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

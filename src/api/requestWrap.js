const requestWrap = function(config, instance, from) {
  if (!config) return instance;
  const baseURL = from;
  const cmd = baseURL + config.url.replace(/\//g, ".");
  const data = config.data ? config.data : {};
  const loginInfo = localStorage.getItem("login");
  const token = JSON.parse(loginInfo);
  const inWhitelist = ["alipay"].some(key => {
    return new RegExp(key).test(config.url);
  });
  if (inWhitelist) {
    return instance(config);
  }
  return instance({
    baseURL: "/cgi",
    method: "post",
    params: {
      encryption: 0
    },
    data: {
      cmd,
      ...data,
      ...token
    }
  });
};
export default requestWrap;

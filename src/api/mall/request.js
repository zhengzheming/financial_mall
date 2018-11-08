import axios from "axios";

const instance = axios.create({
  baseURL: "/mall",
  headers: {
    common: {
      "X-REQUEST-FROM": "mall"
    }
  }
});

const requestWrap = function(config) {
  if (!config) return instance;
  const baseURL = "mall";
  const cmd = baseURL + config.url.replace(/\//g, ".");
  const data = config.data ? config.data : {};
  const loginInfo = localStorage.getItem("login");
  const token = JSON.parse(loginInfo);
  return instance({
    baseURL: "/cgi",
    method: "post",
    params: {
      encryption: 0,
      ...data
    },
    data: {
      cmd,
      ...token
    }
  });
};
export default requestWrap;

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
  return instance({
    baseURL: "/",
    method: "post",
    params: {
      encryption: 0,
      ...data
    },
    data: {
      cmd,
      userid: "",
      token: ""
    }
  });
};
export default requestWrap;

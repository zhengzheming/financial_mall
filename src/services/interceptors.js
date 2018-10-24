import request from "axios";
import { Toast } from "vant";

request.interceptors.response.use(response => {
  const res = response.data;
  if (res.status != 0) {
    Toast(res.data);
  }
  return res;
});

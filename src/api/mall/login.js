import request from "./request";

export function login(mobile, verify_code) {
  return request({
    method: "post",
    url: "/site/login",
    data: {
      mobile,
      verify_code
    }
  });
}

export function getVercode(mobile) {
  return request({
    method: "post",
    url: "/site/sendVerifyCode",
    data: {
      mobile
    }
  });
}

import request from "axios";

export function login(data) {
  return request({
    method: "post",
    url: "/api/login",
    data
  });
}

export function getVercode(data) {
  return request({
    method: "post",
    url: "/api/vercode",
    data
  });
}

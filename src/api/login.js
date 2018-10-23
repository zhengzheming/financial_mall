import request from "axios";

export function login(data) {
  request({
    method: "post",
    url: "/api/login",
    data
  });
}

export function getVercode(data) {
  request({
    method: "post",
    url: "/api/vercode",
    data
  });
}

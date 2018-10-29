import request from "./request";

export function getUserInfo() {
  return request({
    method: "post",
    url: "/user/getInfo"
  });
}

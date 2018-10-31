import request from "./request";
export function getOrderList() {
  return request({
    method: "post",
    url: "/order/getList"
  });
}

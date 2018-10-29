import request from "./request";
export function addOrder(goods_id) {
  return request({
    method: "post",
    url: "/order/add",
    data: {
      goods_id
    }
  });
}

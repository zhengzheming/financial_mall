import request from "./request";
export function addOrder(goods_id) {
  return request({
    method: "post",
    url: "/order/add",
    data: {
      goods_id,
      quantity: "1"
    }
  });
}

export function repayTrialDetail(goods_id) {
  return request({
    method: "post",
    url: "/loan/replayTrialDetail",
    data: {
      goods_id
    }
  });
}

import request from "./request";
export function getRepaymentVercode(phone) {
  return request({
    method: "get",
    url: "/api/vercode",
    data: {
      phone
    }
  });
}

export function getRepaymentDetail() {
  return request({
    method: "post",
    url: "loan/replayPlanDetail"
  });
}

export function getOrderList() {
  return request({
    url: "/order/getList",
    method: "post"
  });
}

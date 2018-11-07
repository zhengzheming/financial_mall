import request from "./request";
export function getRepaymentVercode(mobile) {
  return request({
    method: "post",
    url: "/loan/sendRepaymentSmsCode",
    data: {
      mobile
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

export function repay(data) {
  return request({
    method: "post",
    url: "/loan/repayment",
    data
  });
}

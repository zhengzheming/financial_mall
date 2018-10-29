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

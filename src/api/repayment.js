import request from "axios";
export function getRepaymentVercode(phone) {
  return request({
    method: "get",
    url: "/api/vercode",
    data: {
      phone
    }
  });
}

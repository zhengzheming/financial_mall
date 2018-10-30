import request from "./request";

export function getCardBagList(card_status = "", page = 1, page_size = 10) {
  return request({
    method: "post",
    url: "/ticket/cardBag",
    data: {
      card_status,
      page,
      page_size
    }
  });
}

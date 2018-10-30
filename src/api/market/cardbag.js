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

export function addTicket(card_number) {
  return request({
    method: "post",
    url: "/ticket/addCard",
    data: {
      card_number
    }
  });
}

export function sellTicket(card_bag_id) {
  return request({
    url: "/ticket/sellCard",
    method: "post",
    data: {
      card_bag_id
    }
  });
}

import request from "axios";
export function getBank(cardNo) {
  return request({
    method: "get",
    url: "https://ccdcapi.alipay.com/validateAndCacheCardInfo.json",
    params: {
      _input_charset: "utf-8",
      cardNo,
      cardBinCheck: true
    }
  });
}

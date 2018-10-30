export default function getFn(request) {
  return {
    getBank(cardNo) {
      return request({
        method: "get",
        url: "https://ccdcapi.alipay.com/validateAndCacheCardInfo.json",
        params: {
          _input_charset: "utf-8",
          cardNo,
          cardBinCheck: true
        }
      });
    },
    getOwnBankCards(type) {
      return request({
        url: "bankCard/getBindBankCard",
        method: "post",
        data: {
          type
        }
      });
    },
    bindCard(data) {
      return request({
        url: "/bankCard/bindCard",
        method: "post",
        data
      });
    },
    getBankcardInfo(card_number) {
      return request({
        url: "/bankCard/getBankCardInfo",
        method: "post",
        data: {
          card_number
        }
      });
    },
    sendBankcardSms(data) {
      return request({
        url: "/bankCard/sendBindCardSms",
        method: "post",
        data
      });
    }
  };
}

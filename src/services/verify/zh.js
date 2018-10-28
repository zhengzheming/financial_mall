const messages = {
  required: field => `请输入${field}`
};

const attributes = {
  name: "姓名",
  cardId: "身份证号",
  cardNo: "储蓄卡号",
  phone: "手机号",
  captcha: "验证码"
};

const locale = {
  name: "zh",
  messages,
  attributes
};

export default locale;

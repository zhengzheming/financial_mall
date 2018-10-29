import api from "@/api";
export function isCardId(card) {
  //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
  const reg = /(^\d{15}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(card);
}

export function isPhone(phone) {
  const reg = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;
  return reg.test(phone);
}

export default [
  {
    getMessage(field) {
      return `请输入正确的${field}`;
    },
    validate(value) {
      return isCardId(value);
    },
    name: "isCardIdTruthy" // 身份证
  },
  {
    name: "isCardNoTruthy", // 储蓄卡
    getMessage(field) {
      return `请输入正确的${field}`;
    },
    validate(value) {
      return new Promise(resolve => {
        return api.getBank(value).then(res => {
          return resolve({
            valid: res.validated
          });
        });
      });
    }
  },
  {
    name: "isPhoneTruthy",
    getMessage: field => `请输入正确的${field}`,
    validate: value => isPhone(value)
  }
];

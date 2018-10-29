import * as login from "./login";
import * as repayment from "./repayment";
import * as global from "./global";
import * as goodsdetail from "./goodsdetail";

export default {
  ...global,
  ...login,
  ...repayment,
  ...goodsdetail
};

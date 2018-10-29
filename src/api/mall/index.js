import * as login from "./login";
import * as repayment from "./repayment";
import * as global from "./global";
import * as goodsdetail from "./goodsdetail";
import getFn from "../common";
import request from "./request";

export default {
  ...global,
  ...login,
  ...repayment,
  ...goodsdetail,
  ...getFn(request)
};

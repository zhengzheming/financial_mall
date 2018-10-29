import * as login from "./login";
import * as repayment from "./repayment";
import * as global from "./global";

export default {
  ...global,
  ...login,
  ...repayment
};

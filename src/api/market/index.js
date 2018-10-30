import * as login from "./login";
import * as cardbag from "./cardbag";
import getFn from "../common";
import request from "./request";

export default {
  ...login,
  ...cardbag,
  ...getFn(request)
};

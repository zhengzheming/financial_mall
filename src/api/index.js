import mall from "./mall/index";
import market from "./market/index";
import request from "axios";
import getFn from "./common";

export default {
  mall: {
    ...mall
  },
  market: {
    ...market
  },
  ...getFn(request)
};

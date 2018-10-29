import * as common from "./common";
import mall from "./mall/index";
import market from "./market/index";

export default {
  mall: {
    ...mall,
    ...common
  },
  market: {
    ...market,
    ...common
  }
};

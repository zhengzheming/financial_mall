import initPage from "@/views/initPage";
import requestWrap from "@/api/market/request";
import router from "./router";
import store from "./store";

initPage("market", requestWrap(), router, store);

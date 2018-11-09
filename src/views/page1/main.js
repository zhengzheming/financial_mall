import initPage from "@/views/initPage";
import requestWrap from "@/api/mall/request";
import router from "./router";
import store from "./store";

initPage("mall", requestWrap(), router, store);

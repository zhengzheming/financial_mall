import LargeButton from "./LargeButton";
import BankCell from "./BankCell";
import CaptchaBtn from "./CaptchaBtn";
import Vue from "vue";

const arr = [LargeButton, BankCell, CaptchaBtn];

arr.forEach(component => {
  Vue.component(component.name, component);
});

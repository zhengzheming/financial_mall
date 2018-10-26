import LargeButton from "./LargeButton";
import BankCell from "./BankCell";
import Vue from "vue";

const arr = [LargeButton, BankCell];

arr.forEach(component => {
  Vue.component(component.name, component);
});

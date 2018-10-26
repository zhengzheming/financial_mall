import LargeButton from "./LargeButton";
import Vue from "vue";

const arr = [LargeButton];

arr.forEach(component => {
  Vue.component(component.name, component);
});

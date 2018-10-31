import Vue from "vue";
function formatCurrency(val) {
  return val / 100;
}

Vue.filter("formatCurrency", formatCurrency);

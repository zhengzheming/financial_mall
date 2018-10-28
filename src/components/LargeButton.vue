<template>
  <div
    :style="`margin-top: ${marginTop}`"
    class="large-button">
    <van-button
      :disabled="disabled"
      size="large"
      type="primary"><slot>大号按钮</slot></van-button>
  </div>
</template>

<script>
export default {
  name: "LargeButton",
  props: {
    marginTop: {
      type: String,
      default: "30px"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.large-button {
  padding: 0 20px;
  margin-bottom: 30px;
  pointer-events: none;
  /deep/ > * {
    pointer-events: auto;
    & > * {
      pointer-events: none;
    }
  }
}
</style>

<template>
  <div class="my-header">
    <div class="avatar">
      <img
        :src="avatar"
        alt="">
    </div>
    <div class="name">{{ name }}</div>
    <div class="phone">{{ phone }}</div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  props: {
    avatar: {
      type: String,
      default:
        "https://cdn.dribbble.com/users/160522/screenshots/1179084/stevejobs-01.jpg"
    },
    name: {
      type: String,
      default: "Steven Jobs"
    },
    phone: {
      type: String,
      default: "0716-1888277"
    }
  }
};
</script>

<style scoped lang="scss">
.my-header {
  padding: 10px 0;
  text-align: center;
  .avatar img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
  }
}
</style>

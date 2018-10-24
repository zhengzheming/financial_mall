<template>
  <main>
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item 
        :to="{name: 'goods'}" 
        icon="cart">首页</van-tabbar-item>
      <van-tabbar-item
        :to="{name: 'my'}" 
        icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </main>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0
    };
  }
};
</script>

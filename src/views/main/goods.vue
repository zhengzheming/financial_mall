<template>
  <div class="goods">
    <router-link
      v-for="(item, index) in goods"
      :key="index"
      class="link"
      to="/">
      <van-card
        :thumb="item.imageUrl"
        :price="item.price"
        :desc="item.desc"
        :title="item.title"
        num="1"
      />
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Goods",
  data() {
    return {
      goods: [
        {
          title: "加油卡",
          desc: "全国中石化石油 闪电到账",
          imageUrl:
            "https://img13.360buyimg.com/n7/jfs/t6922/6/1446378781/124618/a4558d00/598194eeN0485ec53.jpg",
          price: "1000"
        },
        {
          title: "京东E卡",
          desc: "京东E卡1000元面值",
          imageUrl:
            "https://img12.360buyimg.com/n7/jfs/t6235/288/1351884859/60243/1417396b/5950b77eNb0eba280.jpg",
          price: "1000"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.link {
  display: block;
}
.link + .link {
  margin-top: 10px;
}
</style>

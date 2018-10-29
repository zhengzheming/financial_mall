// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.scss` 这个文件
        data: `@import "@/assets/scss/vars.scss"; @import "@/assets/scss/mixins.scss";`
      }
    }
  },
  pages: {
    mall: {
      entry: "src/views/page1/main.js",
      template: "public/index.html",
      title: "金融商城"
    }
  }
};

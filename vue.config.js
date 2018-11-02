// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("image-webpack-loader")
      .test(/\.(jpg|png|gif|svg)$/)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .end();
  },
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
      filename: "mall_index.html",
      template: "public/index.html",
      title: "金融商城"
    },
    market: {
      entry: "src/views/page2/main.js",
      filename: "market_index.html",
      template: "public/index.html",
      title: "二级市场"
    }
  }
};

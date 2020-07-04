const withCss = require("@zeit/next-css")

module.exports = withCss({
    // 支持css模块化组件引入
    cssModules: true,
    // css样式作用隔离
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    // 自定义webpack
    webpack(config, options) {
        return config
    },
})

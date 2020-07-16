/**
 * 配置修改，参考引入antd
 */
const withPlugins = require("next-compose-plugins")
const withPluginAntd = require("next-plugin-antd")
const lessToJS = require("less-vars-to-js")
const fs = require("fs")
const path = require("path")
const withCss = require("@zeit/next-css")

const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, "./styles/antdCustom.less"), "utf8")
)

const nextConfig = {
    webpack(config, options) {
        config.module.rules.push({
            test: /\.md$/,
            use: "raw-loader",
        })
        return config
    },
}

module.exports = withPlugins(
    [
        [
            withPluginAntd,
            {
                antdThemeVariables: themeVariables,
                lessLoaderOptions: {
                    javascriptEnabled: true,
                },
            },
        ],
        [
            withCss,
            {
                cssModules: true,
                cssLoaderOptions: {
                    importLoaders: 1,
                    localIdentName: "[local]___[hash:base64:5]",
                },
            },
        ],
    ],
    nextConfig
)

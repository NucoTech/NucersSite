import { isNightNow } from "@utils/utils"

const echarts = require("echarts")

// 主题文件
const vintageTheme = require("./vintage.json")
const darkTheme = require("./dark.json")

/**
 * 主题选择函数，决定主题的注册
 */
export function chooseEchartsTheme(): string {
    if (isNightNow()) {
        echarts.registerTheme("dark", darkTheme)
        return "dark"
    } else {
        echarts.registerTheme("vintage", vintageTheme)
        return "vintage"
    }
}

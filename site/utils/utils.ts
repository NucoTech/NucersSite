// 工具函数

/**
 * 设置晚上七点之后和早上六点之前为夜间模式
 */
export function isNightNow(): boolean {
    const hours = new Date().getHours()
    return hours > 19 || hours < 6
}

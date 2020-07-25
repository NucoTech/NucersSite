// 工具函数

/**
 * 字符画数组
 */
export const wordsPaint: Array<string> = [
    " _   _                         ",
    "| \\ | |                        ",
    "|  \\| |_   _  ___ ___ _ __ ___ ",
    "| . ` | | | |/ __/ _ \\ '__/ __|",
    "| |\\  | |_| | (_|  __/ |  \\__ \\",
    "|_| \\_|\\__,_|\\___\\___|_|  |___/",
]

/**
 * 命令行输出
 */
export function welcome2Nucers(): void {
    console.log(wordsPaint.join("\n"))
    console.log(
        [
            "欢迎来到有趣好玩的Nucers社区👌ヾ(•ω•`)o\n",
            "技术支持: \nhttps://www.nucosc.com\nhttps://nucosc.gitee.io\n",
            "GitHub: https://github.com/NUCOSC",
            "Gitee: https://gitee.com/NUCOSC",
        ].join("\n")
    )
}

/**
 * 设置晚上七点之后和早上六点之前为夜间模式
 */
export function isNightNow(): boolean {
    const hours = new Date().getHours()
    return hours >= 19 || hours <= 6
}

/**
 * 纪念日检查
 */
export function isMemorizedDays(): any {
    const days: Array<string> = ["7-7", "9-18", "12-13"]
    const today: Date = new Date()
    const date: string = `${today.getMonth() + 1}-${today.getDate()}`
    if (days.includes(date)) {
        return {
            is: true,
            date: date,
        }
    }
    return {
        is: false,
        date: date,
    }
}

/**
 * 搜索语法解析引擎
 */
export function searchEngineLexer(
    searchRaw: string
): Map<string, string | Array<string>> {
    // 中文引号替换
    const search: string = searchRaw.replace("：", ":")
    // 正则表达式语法解析
    const searchArray: Array<string> = search.split("&&")
    const searchRegExp: RegExp = /[\s]+([\S]+):[\s]+([\s\S]+)/
    // 合法搜索头
    const validHead: Array<string> = ["title", "groups", "tags"]
    // 搜索内容节点
    let searchNodes: Map<string, string | Array<string>> = new Map<
        string,
        string | Array<string>
    >()
    searchArray.forEach((item: string) => {
        const ans: Array<string> = item.match(searchRegExp)
        // 为null匹配的时候  不合法搜索头的时候 出现title搜索头的时候
        if (
            !ans ||
            !validHead.includes(ans[1].toLowerCase()) ||
            ans[1].toLowerCase() === "title"
        ) {
            searchNodes.set("title", item.trim())
        } else {
            searchNodes.set(
                ans[1].toLowerCase(),
                ans[2].split("|").map((item: string) => item.trim())
            )
        }
    })
    return searchNodes
}

/**
 * oa的url返回
 */
export function backOAURL(url: string): string {
    return url.split("/").slice(0, 4).join("/")
}

/**
 * 设置数据API
 */
export const dataRemote: string = ""
export const searchRemote: string = `${dataRemote}/search`

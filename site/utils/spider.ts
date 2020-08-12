/**
 * 数据爬虫API
 */
import * as cheerio from "cheerio"

/**
 * 获取CMS数据
 */
const GetNUCCMSData = async (remote: string, len: number) => {
    const res: Response = (await fetch(
        `http://www.nuc.edu.cn/index/${remote}.htm`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                "Content-Type": "text/html",
            },
        }
    ).catch((e: Error) => {
        console.log(e)
    })) as Response
    const rawText: string = await res.text()
    const $ = cheerio.load(rawText)
    const data = $(".list_con_rightlist ul li")
        .slice(0, len)
        .map(function (i, elem) {
            let obj = { title: "", href: "", time: "" }
            obj.title = $(this).children().first().text()
            obj.href = $(this)
                .children()
                .first()
                .attr("href")
                .replace("..", "http://www.nuc.edu.cn")
            obj.time = $(this).children().last().text()
            return obj
        })
        .get()
    return data
}

export { GetNUCCMSData }

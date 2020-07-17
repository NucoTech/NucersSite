import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar from "@components/common/NavBar"
import { welcome2Nucers } from "@utils/utils"
import { HotTagsMocks } from "@mocks/datas"

const indexStyle = require("@styles/pages/index.module.css")

const WordCloud = dynamic(import("@components/charts/WordCloud"), {
    ssr: false,
})

export default () => {
    welcome2Nucers()
    return (
        <div className={indexStyle.content}>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar />
            <div className="left">
                {/* 话题榜 */}
                <WordCloud words={HotTagsMocks} />
            </div>
            <div className="right">
                {/* 轮播图广告 */}
                {/* 通知 */}
                {/* 热门帖子 */}
                {/* 热门一点想法 */}
                {/* 新加入成员 */}
            </div>
        </div>
    )
}

import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar from "@components/common/NavBar"
import { welcome2Nucers } from "@utils/utils"
import { HotTagsMocks, AdsMocks } from "@mocks/datas"
import HotTopics from "@components/common/HotTopics"
import Activities from "@components/common/Activities"
import Hitokoto from "@components/common/Hitokoto"
import HotPosts from "@components/common/HotPosts"
import Notices from "@components/common/Notices"
import Newers from "@components/common/Newers"
import CopyrightBottom from "@components/common/CopyrightBottom"
import DarkSwitcher from "@components/common/DarkSwitcher"

const indexStyle = require("@styles/pages/index.module.css")

const WordCloud = dynamic(import("@components/charts/WordCloud"), {
    ssr: false,
})

export default () => {
    welcome2Nucers()
    return (
        <div>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar />
            <div className={indexStyle.content}>
                <div className={indexStyle.left}>
                    <HotTopics />
                    <WordCloud words={HotTagsMocks} />
                </div>
                <div className={indexStyle.right}>
                    <Hitokoto />
                    <div className={indexStyle.rightContent}>
                        <div className={indexStyle.contentLeft}>
                            <Activities acts={AdsMocks} />
                            <Notices />
                        </div>
                        <div className={indexStyle.contentRight}>
                            <HotPosts />
                            <Newers />
                        </div>
                    </div>

                    {/* 轮播图广告 */}
                    {/* 通知 */}
                    {/* 热门帖子 */}
                    {/* 热门一点想法 */}
                    {/* 新加入成员 */}
                </div>
            </div>
            <DarkSwitcher />
            <CopyrightBottom />
        </div>
    )
}

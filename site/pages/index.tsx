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
import PageBox from "@components/common/PageBox"

const indexStyle = require("@styles/pages/index.module.css")

const WordCloud = dynamic(import("@components/charts/WordCloud"), {
    ssr: false,
})

export default () => {
    welcome2Nucers()
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar />
            <div className={indexStyle.content}>
                <div className={indexStyle.left}>
                    <HotTopics />
                    <div className={indexStyle.marginer}>
                        <WordCloud words={HotTagsMocks} />
                    </div>
                </div>
                <div className={indexStyle.right}>
                    <Hitokoto />
                    <div className={indexStyle.rightContent}>
                        <div className={indexStyle.contentLeft}>
                            <div className={indexStyle.marginer}>
                                <Activities acts={AdsMocks} />
                            </div>
                            <div className={indexStyle.marginer}>
                                <Notices />
                            </div>
                        </div>
                        <div className={indexStyle.contentRight}>
                            <div className={indexStyle.marginer}>
                                <HotPosts />
                            </div>
                            <div className={indexStyle.marginer}>
                                <Newers />
                            </div>
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
        </PageBox>
    )
}

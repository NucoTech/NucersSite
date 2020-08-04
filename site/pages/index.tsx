import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar from "@components/common/NavBar"
import { welcome2Nucers } from "@utils/utils"
import { HotTagsMocks, AdsMocks, NewersMocks } from "@mocks/datas"
import HotTopics from "@components/common/HotTopics"
import Activities from "@components/common/Activities"
import Hitokoto from "@components/common/Hitokoto"
import HotPosts from "@components/common/HotPosts"
import Notices from "@components/common/Notices"
import Newers from "@components/common/Newers"
import CopyrightBottom from "@components/common/CopyrightBottom"
import SchoolNews from "@components/common/SchoolNews"
import SomeIdea from "@components/common/SomeIdea"

const indexStyle = require("@styles/pages/index.module.css")

import PageBox from "@components/common/PageBox"
import NavBarMobile from "@components/common/NavBarMobile"

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
            <NavBarMobile />
            <div className={indexStyle.content}>
                <div className={indexStyle.left}>
                    <HotTopics />
                    <div className={indexStyle.marginer}>
                        <WordCloud words={HotTagsMocks} />
                    </div>
                    <div className={indexStyle.marginer}>
                        <Newers newers={NewersMocks} />
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
                            <div className={indexStyle.marginer}>
                                <SchoolNews />
                            </div>
                        </div>
                        <div className={indexStyle.contentRight}>
                            <div className={indexStyle.marginer}>
                                <HotPosts />
                            </div>
                            <div className={indexStyle.ideaAndNewer}>
                                <div className={indexStyle.marginer}>
                                    <SomeIdea />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CopyrightBottom />
        </PageBox>
    )
}

import Head from "next/head"
import dynamic from "next/dynamic"

const indexStyle = require("@styles/pages/index.module.css")

import PageBox from "@components/common/tools/PageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"
import { welcome2Nucers } from "@utils/utils"
import HotTopics from "@components/common/HotTopics"
import Activities from "@components/common/Activities"
import Hitokoto from "@components/common/Hitokoto"
import HotPosts from "@components/common/HotPosts"
import Notices from "@components/common/Notices"
import Newers from "@components/common/Newers"
import CopyrightBottom from "@components/common/CopyrightBottom"
import SchoolNews from "@components/common/SchoolNews"
import SomeIdea from "@components/common/SomeIdea"

import TestSetBtn from "@components/auth/TestSetBtn"
import TypedDisplay from "@components/common/effects/TypedDisplay"
import Clock from "@components/common/effects/Clock"

const ParticlesBackground = dynamic(
    import("@components/common/effects/ParticlesBackground"),
    {
        ssr: false,
    }
)

const WordCloud = dynamic(import("@components/charts/WordCloud"), {
    ssr: false,
})

import { HotTagsMocks, AdsMocks, NewersMocks } from "@mocks/datas"

const Home = () => {
    welcome2Nucers()
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
                <meta
                    name="keywords"
                    content="Community;BBS;Nucers;Technology;Share;"
                />
                <meta
                    name="description"
                    content="Nucers社区是一个倡导技术突破、经验共享的社区平台，以内容为核心突破传统学科束缚，致力于用户更好的进行跨学科技术交流"
                />
            </Head>
            <NavBar />
            <NavBarMobile />
            <ParticlesBackground />
            <TypedDisplay />
            <div className={indexStyle.content}>
                <div className={indexStyle.left}>
                    <Clock />
                    <HotTopics />
                    <WordCloud words={HotTagsMocks} />
                    <Newers newers={NewersMocks} />
                </div>
                <div className={indexStyle.right}>
                    <Hitokoto />
                    <div className={indexStyle.rightContent}>
                        <div className={indexStyle.contentLeft}>
                            <Activities acts={AdsMocks} />
                            <Notices />
                            <SchoolNews />
                        </div>

                        <div className={indexStyle.contentRight}>
                            <HotPosts />

                            <div className={indexStyle.ideaAndNewer}>
                                <SomeIdea />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CopyrightBottom />
            <TestSetBtn />
        </PageBox>
    )
}

export default Home

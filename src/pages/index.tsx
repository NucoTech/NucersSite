import React from "react"
import { Helmet, IGetInitialProps, isBrowser } from "umi"

import style from "./index.less"

import ParticlesBackground from "@/components/effects/ParticlesBackground"
import TypedDisplay from "@/components/effects/TypedDisplay"
import Hitokoto from "@/components/effects/Hitokoto/Hitokoto"
import HotPosts from "@/components/modules/HotPosts"

import { ICommonNewss } from "@/utils/interfaces"
import { IIndexDataReq } from "@/utils/requestInterfaces"
import { GetNUCCMSData } from "@/utils/spider"
import { dataRemote, welcome2Nucers } from "@/utils/utils"
import HotTopics from "@/components/modules/HotTopics/HotTopics"
import WordCloud from "@/components/charts/WordCloud"
import Newers from "@/components/modules/Newers/Newers"
import Notices from "@/components/modules/Notices"
import SchoolNews from "@/components/modules/SchoolNews"
import SchoolAcademicActs from "@/components/modules/SchoolAcademicActs"
import Activities from "@/components/modules/Activities"
import AntiMarginBox from "@/components/common/AntiMarginBox"
import Footer from "@/components/common/Footer/Footer"

interface IHomeProps extends IGetInitialProps {
    academeicActs: ICommonNewss
    schoolNews: ICommonNewss
    data: IIndexDataReq
}

/**
 *
 * @param props
 */
const Home = (props: IHomeProps) => {
    React.useEffect(() => {
        welcome2Nucers()
    }, [])

    let { data } = props

    data = typeof data === "undefined" ? ({} as IIndexDataReq) : data

    return (
        <div className={style.clientBox}>
            <Helmet>
                <title>Nucers社区 | 技术因分享而升华</title>
                <meta
                    name="keywords"
                    content="Community;BBS;Nucers;Technology;Share;"
                />
                <meta
                    name="description"
                    content="Nucers社区是一个倡导技术突破、经验共享的社区平台，以内容为核心突破传统学科束缚，致力于用户更好的进行跨学科技术交流"
                />
            </Helmet>

            <ParticlesBackground />
            <TypedDisplay />
            <div className={style.clientContent}>
                <div className={style.clientLeft}>
                    <Activities acts={data.acts} />
                    <HotTopics topics={data.topics} />
                    <WordCloud words={data.tags} />
                    <Newers newers={data.newers} />
                </div>
                <div className={style.clientRight}>
                    <AntiMarginBox>
                        <Hitokoto />
                        <Notices notices={data.notices} />
                        <HotPosts posts={data.posts} />
                        <SchoolNews />
                        <SchoolAcademicActs />
                    </AntiMarginBox>
                </div>
            </div>
            <Footer />
        </div>
    )
}

Home.getInitialProps = (async (ctx: any) => {
    // const academeicActs = await GetNUCCMSData("xshd", 5)
    // const schoolNews = await GetNUCCMSData("zbxw", 10)
    const res = await fetch("http://localhost:8000/api")
    const result = await res.json()
    return Promise.resolve({
        data: result,
    })
}) as IGetInitialProps

export default Home

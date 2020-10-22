import React from "react"
import { Helmet } from "umi"

import style from "./index.less"

import ParticlesBackground from "@/components/effects/ParticlesBackground"
import TypedDisplay from "@/components/effects/TypedDisplay"
import Hitokoto from "@/components/effects/Hitokoto/Hitokoto"
import HotPosts from "@/components/modules/HotPosts"

import { ICommonNewss } from "@/utils/interfaces"
import { IIndexDataReq } from "@/utils/requestInterfaces"
import { GetNUCCMSData } from "@/utils/spider"
import { welcome2Nucers } from "@/utils/utils"
import HotTopics from "@/components/modules/HotTopics/HotTopics"
import WordCloud from "@/components/charts/WordCloud"
import Newers from "@/components/modules/Newers/Newers"
import Notices from "@/components/modules/Notices"
import SchoolNews from "@/components/modules/SchoolNews"
import SchoolAcademicActs from "@/components/modules/SchoolAcademicActs"
import Activities from "@/components/modules/Activities"
import AntiMarginBox from "@/components/common/AntiMarginBox"

interface IHomeProps {
    academeicActs: ICommonNewss
    schoolNews: ICommonNewss
    data: IIndexDataReq
}

/**
 * 临时测试数据
 */
const PostsMocks = [
    { poid: "po324234234", title: "测试", time: "2020-08-02" },
    { poid: "po2346223423t234", title: "公告", time: "2020-08-02" },
    { poid: "posdfadadfasdfa", title: "测试公告", time: "2020-08-02" },
    {
        poid: "poqwrwerqwrqwer",
        title:
            "啊实打实dfsdfsdfsdffffffgsdfg dsfgs dfg sdfg sdfg dsfgsdfgsdfgsdfg sdfgs fgsfg sdfg sdfg sdfg sdfg sdfg sdfg sfffffffffffffffffffffffffffsdfsdfsdfsdf大苏打锕",
        time: "2020-08-02",
    },
    { poid: "powerawerawera", title: "ASDFASDFASDF", time: "2020-08-02" },
    { poid: "podxcasdfasd", title: "GQWWEQWERQWEW", time: "2020-08-02" },
    {
        poid: "poasdfafadfadfasdf",
        title: "QWERQWERQWERQWE",
        time: "2020-08-02",
    },
]

const TopicsMocks = [
    "话题一",
    "话题二",
    "话题三",
    "话题四",
    "话题五",
    "话题六",
    "话题七",
    "话题八",
    "话题九",
    "话题十",
    "话题十一",
    "话题十二",
    "话题十三",
    "话题十四",
    "话题十五测试测试测试测试",
]

const HotTagsMocks = [
    { text: "测试", value: 70 },
    { text: "前端", value: 50 },
    { text: "开发", value: 90 },
    { text: "Nucers", value: 90 },
    { text: "话题", value: 90 },
    { text: "React", value: 90 },
    { text: "Vue", value: 90 },
    { text: "娱乐", value: 100 },
]

const NewersMocks = [
    {
        name: "Zenith",
        uid: "123123",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "1123",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "1223",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "12",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
    {
        name: "Zenith",
        uid: "113",
        avatar:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
    },
]

const NoticesMocks = [
    { noid: "324234234", title: "测试" },
    { noid: "2346223423t234", title: "公告" },
    { noid: "sdfadadfasdfa", title: "测试公告" },
    {
        noid: "qwrwerqwrqwer",
        title:
            "啊实dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打实大苏打锕",
    },
    { noid: "werawerawera", title: "ASDFASDFASDF" },
    { noid: "dxcasdfasd", title: "GQWWEQWERQWEW" },
    { noid: "asdfafadfadfasdf", title: "QWERQWERQWERQWE" },
]

const AdsMocks = [
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        href: "https://www.nucosc.com",
    },
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        href: "https://www.nucosc.com",
    },
    {
        title: "NUCOSC",
        src:
            "https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg",
        href: "https://www.nucosc.com",
    },
]

const Home = (props: IHomeProps) => {
    welcome2Nucers()
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
                    <Activities acts={AdsMocks} />
                    <HotTopics topics={TopicsMocks} />
                    <WordCloud words={HotTagsMocks} />
                    <Newers newers={NewersMocks} />
                </div>
                <div className={style.clientRight}>
                    <AntiMarginBox>
                        <Hitokoto />
                        <Notices notices={NoticesMocks} />
                        <HotPosts posts={PostsMocks} />
                        <SchoolNews />
                        <SchoolAcademicActs />
                    </AntiMarginBox>
                </div>
            </div>
        </div>
    )
}

// Home.getInitialProps = async (ctx: any) => {
//     const academeicActs = await GetNUCCMSData("xshd", 5)
//     const schoolNews = await GetNUCCMSData("zbxw", 10)
//     const res = await fetch("http://localhost:8000/api")
//     const result = await res.json()
//     console.log(result)
//     return Promise.resolve({
//         academeicActs,
//         schoolNews,
//         data: result.data
//     })
// }

export default Home

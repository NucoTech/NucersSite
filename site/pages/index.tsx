import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar, { INav } from "@components/common/NavBar"
import HeatCalendar from "@components/charts/HeatCalendar"
import ActsRadar from "@components/charts/ActsRadar"
import { welcome2Nucers } from "@utils/utils"
import { IWordCloud } from "@components/charts/WordCloud"

const WordCloud = dynamic(import("@components/charts/WordCloud"), {
    ssr: false,
})

export default function Home() {
    welcome2Nucers()

    const datass: Array<IWordCloud> = [
        { text: "测试", value: 70 },
        { text: "前端", value: 50 },
        { text: "开发", value: 90 },
        { text: "Nucers", value: 90 },
        { text: "话题", value: 90 },
        { text: "React", value: 90 },
        { text: "Vue", value: 90 },
        { text: "娱乐", value: 100 },
    ]

    return (
        <div>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar />

            <WordCloud words={datass} />
            Hello, Nucers
        </div>
    )
}

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

    const datas: Array<any> = [
        ["2020-01-01", 40043],
        ["2020-01-05", 4340],
        ["2020-01-06", 430],
        ["2020-01-07", 40],
        ["2020-02-08", 50],
        ["2020-04-08", 450],
        ["2020-06-08", 432450],
        ["2020-07-08", 45230],
        ["2020-08-08", 4530],
    ]

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
            <HeatCalendar range="2020" datas={datas} />
            <ActsRadar datas={[4464, 5555, 6666, 7666, 3243]} />
            <WordCloud words={datass} />
            Hello, Nucers
        </div>
    )
}

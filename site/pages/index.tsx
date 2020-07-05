import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar, { INav } from "@components/common/NavBar"
import HeatCalendar from "@components/charts/HeatCalendar"

const MarkdownRenderer = dynamic(
    import("@components/common/MarkdownRenderer"),
    {
        ssr: false,
    }
)

export default function Home() {
    const navs: Array<INav> = [
        { title: "广场", url: "/" },
        { title: "组织", url: "/groups" },
        { title: "趋势", url: "/trends" },
    ]

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
    return (
        <div>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar navs={navs}></NavBar>
            <MarkdownRenderer content="# Hello" />
            <HeatCalendar range="2020" datas={datas} />
            Hello, Nucers
        </div>
    )
}

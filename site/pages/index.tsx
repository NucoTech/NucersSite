import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar, { INav } from "@components/common/NavBar"

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
    return (
        <div>
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar navs={navs}></NavBar>
            <MarkdownRenderer content="# Hello" />
            Hello, Nucers
        </div>
    )
}

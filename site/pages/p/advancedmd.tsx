import Head from "next/head"
import dynamic from "next/dynamic"
const articleStyle = require("@styles/pages/article.module.css")

const MarkdownRenderer = dynamic(import("@components/posts/MarkdownRenderer"), {
    ssr: false,
})

import NavBar from "@components/common/NavBar"
import MarkdownOutline from "@components/posts/MarkdownOutline"
import CopyrightSide from "@components/common/CopyrightSide"
import MarkdownOutlineMobile from "@components/posts/MarkdownOutlineMobile"
import AdsSide from "@components/common/AdsSide"
import { AdsMocks } from "@mocks/datas"
const advancedMd = require("../../docs/advancedmd.md")

export default () => {
    return (
        <div className={articleStyle.articlePage}>
            <Head>
                <title>Nucers社区 | Markdown高级语法</title>
            </Head>
            <NavBar />
            <div className={articleStyle.articleLeft}>
                <MarkdownRenderer content={advancedMd.default} />
            </div>
            <div className={articleStyle.articleRight}>
                <MarkdownOutline content={advancedMd.default} />
                <AdsSide ads={AdsMocks} />
                <CopyrightSide />
            </div>
            <MarkdownOutlineMobile content={advancedMd.default} />
        </div>
    )
}

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
const markdownMd = require("../../docs/markdown.md")

export default () => {
    return (
        <div className={articleStyle.articlePage}>
            <Head>
                <title>Nucers社区 | Markdown基础与拓展语法</title>
            </Head>
            <NavBar />
            <div className={articleStyle.articleLeft}>
                <MarkdownRenderer content={markdownMd.default} />
            </div>
            <div className={articleStyle.articleRight}>
                <MarkdownOutline content={markdownMd.default} />
                <CopyrightSide />
            </div>
            <MarkdownOutlineMobile content={markdownMd.default} />
        </div>
    )
}

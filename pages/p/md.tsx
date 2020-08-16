import Head from "next/head"
import dynamic from "next/dynamic"
const articleStyle = require("@styles/pages/article.module.css")

import PageBox from "@components/common/tools/PageBox"

import NavBar from "@components/common/NavBar"
import MarkdownOutline from "@components/posts/MarkdownOutline"
import CopyrightSide from "@components/common/CopyrightSide"
import MarkdownOutlineMobile from "@components/posts/MarkdownOutlineMobile"
import AdsSide from "@components/common/AdsSide"

import SideTools from "@components/posts/SideTools"
import Comments from "@components/posts/Comments"
import NavBarMobile from "@components/common/NavBarMobile"

const MarkdownRenderer = dynamic(import("@components/posts/MarkdownRenderer"), {
    ssr: false,
})

const markdownMd = require("../../docs/markdown.md")

const MarkdownSyntax = () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | Markdown基础与拓展语法</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={articleStyle.articlePage}>
                <div className={articleStyle.articleLeft}>
                    <MarkdownRenderer content={markdownMd.default} />
                    <Comments />
                </div>
                <div className={articleStyle.articleRight}>
                    <MarkdownOutline content={markdownMd.default} />
                    <AdsSide />
                    <CopyrightSide />
                    <SideTools />
                </div>
                <MarkdownOutlineMobile content={markdownMd.default} />
            </div>
        </PageBox>
    )
}

export default MarkdownSyntax

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
import PageBox from "@components/common/tools/PageBox"
import NavBarMobile from "@components/common/NavBarMobile"
const advancedMd = require("../../docs/advancedmd.md")

export default () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | Markdown高级语法</title>
                {/* SEO优化 */}
                {/* 注意设置关键词为标签 */}
                <meta name="keywords" content="不超过五个关键词" />
                <meta
                    name="description"
                    content={`${advancedMd.default.substr(0, 145)}`}
                />
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={articleStyle.articlePage}>
                <div className={articleStyle.articleLeft}>
                    <MarkdownRenderer content={advancedMd.default} />
                </div>
                <div className={articleStyle.articleRight}>
                    <MarkdownOutline content={advancedMd.default} />
                    {/* <AdsSide /> */}
                    <CopyrightSide />
                </div>
                <MarkdownOutlineMobile content={advancedMd.default} />
            </div>
        </PageBox>
    )
}

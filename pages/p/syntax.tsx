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
import PageBox from "@components/common/tools/PageBox"
import NavBarMobile from "@components/common/NavBarMobile"
const syntaxMd = require("../../docs/syntax.md")

export default () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | 搜索语法设计</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={articleStyle.articlePage}>
                <div className={articleStyle.articleLeft}>
                    <MarkdownRenderer content={syntaxMd.default} />
                </div>
                <div className={articleStyle.articleRight}>
                    <MarkdownOutline content={syntaxMd.default} />
                    <AdsSide ads={AdsMocks} />
                    <CopyrightSide />
                </div>
                <MarkdownOutlineMobile content={syntaxMd.default} />
            </div>
        </PageBox>
    )
}

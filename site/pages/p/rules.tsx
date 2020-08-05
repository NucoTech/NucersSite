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
import PageBox from "@components/common/PageBox"
import NavBarMobile from "@components/common/NavBarMobile"
const rulesMd = require("../../docs/rules.md")

const Rules = () => {
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | 社区守则</title>
            </Head>
            <NavBar />
            <NavBarMobile />
            <div className={articleStyle.articlePage}>
                <div className={articleStyle.articleLeft}>
                    <MarkdownRenderer content={rulesMd.default} />
                </div>
                <div className={articleStyle.articleRight}>
                    <MarkdownOutline content={rulesMd.default} />
                    <AdsSide ads={AdsMocks} />
                    <CopyrightSide />
                </div>
                <MarkdownOutlineMobile content={rulesMd.default} />
            </div>
        </PageBox>
    )
}

export default Rules

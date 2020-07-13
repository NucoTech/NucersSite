import Head from "next/head"
import dynamic from "next/dynamic"

import NavBar from "@components/common/NavBar"
import { welcome2Nucers } from "@utils/utils"
import { HotTagsMocks } from "@mocks/datas"


const WordCloud = dynamic(import("@components/charts/WordCloud"), {
    ssr: false,
})

export default () => {
    welcome2Nucers()


    return (
        <div className="content">
            <Head>
                <title>Nucers社区 | 技术因分享而升华</title>
            </Head>
            <NavBar />
            <div className="left">
                <WordCloud words={HotTagsMocks} />
            </div>
            <div className="right"></div>
        </div>
    )
}

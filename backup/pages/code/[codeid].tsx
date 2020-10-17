import dynamic from "next/dynamic"
import Head from "next/head"
import { AllCodesRemote } from "@utils/sourcesAPI"
import fetch from "node-fetch"

const CodeMirrorEditor = dynamic(
    import("@components/common/CodeMirrorEditor"),
    {
        ssr: false,
    }
)

/**
 * 云端获取代码
 */
const CodeEditorOutside = ({ code, title, mode }) => {
    return (
        <>
            <Head>
                <title>Nucer在线代码编辑器 | {title}</title>
            </Head>
            <CodeMirrorEditor code={code} mode={mode} />
        </>
    )
}

export const getStaticPaths = async () => {
    const res = await fetch(AllCodesRemote)
    const datas = await res.json()
    console.log(datas)
    const paths = datas.data.codes.map((item: any) => ({
        params: {
            codeid: item.id,
        },
    }))
    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${AllCodesRemote}/${params.codeid}`)
    const data = await res.json()
    return {
        props: {
            code: data.code,
            title: data.title,
            mode: data.mode,
        },
    }
}

export default CodeEditorOutside

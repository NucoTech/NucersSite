import dynamic from "next/dynamic"
import Head from "next/head"

const CodeMirrorEditor = dynamic(
    import("@components/common/CodeMirrorEditor"),
    {
        ssr: false,
    }
)

/**
 * 默认的新编辑器页面
 */
export default () => (
    <>
        <Head>
            <title>Nucers在线代码器编辑</title>
        </Head>
        <CodeMirrorEditor />
    </>
)

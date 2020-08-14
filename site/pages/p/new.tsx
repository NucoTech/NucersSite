import Head from "next/head"
import dynamic from "next/dynamic"

import AuthenticatedPageBox from "@components/auth/AuthenticatedPageBox"
import PageBox from "@components/common/tools/PageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"

const MarkdownEditor = dynamic(import("@components/posts/MarkdownEditor"), {
    ssr: false,
})

/**
 * 发布帖子编辑器
 */
const NewPost = () => (
    <AuthenticatedPageBox>
        <Head>
            <title>Nucers 新建帖子</title>
            <meta name="keywords" content="Nucers;posts;帖子;发表;" />
        </Head>
        <MarkdownEditor />
    </AuthenticatedPageBox>
)

export default NewPost

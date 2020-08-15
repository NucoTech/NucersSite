import Head from "next/head"
import dynamic from "next/dynamic"

import UserAuthedPageBox from "@components/auth/UserAuthedPageBox"

const MarkdownEditor = dynamic(import("@components/posts/MarkdownEditor"), {
    ssr: false,
})

/**
 * 发布帖子编辑器
 */
const NewPost = () => (
    <UserAuthedPageBox>
        <Head>
            <title>Nucers 新建帖子</title>
            <meta name="keywords" content="Nucers;posts;帖子;发表;" />
        </Head>
        <MarkdownEditor />
    </UserAuthedPageBox>
)

export default NewPost

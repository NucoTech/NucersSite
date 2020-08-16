import Head from "next/head"
import dynamic from "next/dynamic"

import UserAuthedPageBox from "@components/auth/UserAuthedPageBox"
import NavBar from "@components/common/NavBar"
import NavBarMobile from "@components/common/NavBarMobile"

const MarkdownEditor = dynamic(import("@components/posts/MarkdownEditor"), {
    ssr: false,
})

/**
 * 发布帖子编辑器
 */
const NewPost = () => (
    <UserAuthedPageBox>
        <Head>
            <title>Nucers 发布帖子</title>
            <meta name="keywords" content="Nucers;posts;帖子;发表;" />
            <meta name="description" content="Nucers新帖子发布在线编辑器" />
        </Head>
        <NavBar navs={[]} />
        <NavBarMobile navs={[]} />
        <div
            style={{
                padding: "0 100px",
                width: "100%",
            }}
        >
            <MarkdownEditor />
        </div>
    </UserAuthedPageBox>
)

export default NewPost

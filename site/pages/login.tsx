import Head from "next/head"
import dynamic from "next/dynamic"

const loginStyle = require("@styles/pages/login.module.css")

import NavBar from "@components/common/NavBar"
import CopyrightBottom from "@components/common/CopyrightBottom"
import LoginForm from "@components/login/LoginForm"
import PageBox from "@components/common/PageBox"

const LoginDisplay = dynamic(import("@components/login/LoginDisplay"), {
    ssr: false,
})

export default () => {
    // 要抓跳转的链接，登陆完成跳回去
    return (
        <PageBox>
            <Head>
                <title>Nucers社区 | 登录 Login</title>
            </Head>
            <NavBar />
            <div className={loginStyle.content}>
                <div className={loginStyle.left}>
                    <LoginForm />
                </div>
                <div className={loginStyle.right}>
                    <LoginDisplay />
                </div>
            </div>
            <CopyrightBottom />
        </PageBox>
    )
}

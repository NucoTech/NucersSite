import React from "react"
import IconFont from "@components/common/tools/IconFont"

const loginFormStyle = require("@styles/components/login/LoginForm.module.css")

/**
 * 登录组件
 */
export default class LoginForm extends React.Component {
    render() {
        return (
            <div className={loginFormStyle.content}>
                <div className={loginFormStyle.title}>登录 | Login</div>
                <input placeholder="电子邮箱/手机号/学号/组织号" />
                <input type="password" placeholder="密码" />
                <div className={loginFormStyle.tips}>
                    <a href="/g/apply">申请组织账号</a>
                    <div>
                        <IconFont type="nucers-warning" />
                        首次使用请使用邮箱将自动发送注册信息
                    </div>
                </div>

                <div className={loginFormStyle.rules}>
                    <input type="checkbox" />
                    已认真阅读并确认同意{" "}
                    <a href="/p/rules">《Nucers社区守则》</a>
                </div>
                <button className={loginFormStyle.subbtn}>登录</button>
            </div>
        )
    }
}

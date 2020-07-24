import React from "react"
import { Checkbox } from "antd"
/**
 * 登录组件
 */
export default class LoginForm extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                }}
            >
                <h3>登录</h3>
                <input placeholder="电子邮箱/手机号/学号/组织号" />
                <input type="password" placeholder="密码" />
                <a>申请组织账号</a>
                <div>未注册将自动发送注册信息</div>
                <div>
                    <Checkbox />
                    确认同意<a href="#">《Nucers社区守则》</a>
                </div>
                <button>登录</button>
            </div>
        )
    }
}

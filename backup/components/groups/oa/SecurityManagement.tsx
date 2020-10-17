import React from "react"
import { Input } from "antd"

const oaBasicStyle = require("@styles/components/groups/oa/OABasic.module.css")
const securityManagementStyle = require("@styles/components/groups/oa/SecurityManagement.module.css")

export default class SecurityManagement extends React.Component {
    render() {
        return (
            <div>
                <div className={oaBasicStyle.title}>账户安全</div>
                <div className={securityManagementStyle.passwordBox}>
                    <Input type="password" placeholder="原密码" />
                    <Input type="password" placeholder="新密码" />
                    <button>确认修改</button>
                </div>
                <div className={securityManagementStyle.tokenBox}>
                    <div>授权Token</div>
                    <p>
                        Token适用于授权应用的免密登录，权限比较高请谨慎授权(功能开发中)
                    </p>
                </div>
            </div>
        )
    }
}

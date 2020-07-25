import React from "react"

const Cookies = require("js-cookie")

/**
 * 认证之后才可操作的页面盒子
 */
export default class AuthenticatedPageBox extends React.Component {
    componentDidMount() {
        // 检查cookie
        Cookies.get
    }
    render() {
        return <>{this.props.children}</>
    }
}

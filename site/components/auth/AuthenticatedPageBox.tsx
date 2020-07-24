import React from "react"
/**
 * 认证之后才可操作的页面盒子
 */
export default class AuthenticatedPageBox extends React.Component {
    render() {
        return <>{this.props.children}</>
    }
}

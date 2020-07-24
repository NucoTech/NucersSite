import React from "react"
/**
 * 认证后才可操作的组件盒子
 */
export default class AuthenticatedComponentBox extends React.Component {
    render() {
        return <>{this.props.children}</>
    }
}

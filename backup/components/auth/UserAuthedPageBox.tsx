import React from "react"
import { inject, observer } from "mobx-react"
import { AuthenticatedStoreType } from "backup/stores/AuthenticatedStore"

interface AuthedPageBoxProps extends AuthenticatedStoreType {}

/**
 * 认证之后才可操作的页面盒子
 */
@inject("authenticatedStore")
@observer
export default class UserAuthedPageBox extends React.Component<
    AuthedPageBoxProps
> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
            authenticatedStore: mobxStore.authenticatedStore,
        }
    }

    componentDidMount() {
        // 设置宏任务避免误杀
        setTimeout(() => {
            const { authed, utype } = this.props.authenticatedStore
            if (!(authed && utype === "user")) {
                location.replace("/login")
            }
        }, 0)
    }

    render() {
        return <div>{this.props.children}</div>
    }
}

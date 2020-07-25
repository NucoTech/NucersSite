import React from "react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { inject, observer } from "mobx-react"
const Cookies = require("js-cookie")

/**
 * 认证之后才可操作的页面盒子
 */
@inject("darkThemeStore")
@observer
export default class AuthenticatedPageBox extends React.Component<
    OnlyDarkThemeStoreType
> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                style={{
                    background: darkNow
                        ? "var(--theme-bg-color-night)"
                        : "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
                    minHeight: "100vh",
                    color: darkNow ? "white" : "black"
                }}
            >
                {this.props.children}
            </div>
        )
    }
}

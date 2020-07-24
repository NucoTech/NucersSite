import React from "react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { inject, observer } from "mobx-react"

/**
 * 本地夜间模式注入盒子
 */
@inject("darkThemeStore")
@observer
export default class LocalDarkInjectBox extends React.Component<
    OnlyDarkThemeStoreType
> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        const { setLocalDark } = this.props.darkThemeStore
        setLocalDark(!!parseInt(localStorage.getItem("darkNow")))
    }
    render() {
        return <>{this.props.children}</>
    }
}

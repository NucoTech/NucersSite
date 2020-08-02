import React from "react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { inject, observer } from "mobx-react"

/**
 * 本地状态注入盒子
 */
@inject("darkThemeStore")
@observer
export default class LocalStatesInjectBox extends React.Component<
    OnlyDarkThemeStoreType
> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        const { setLocalDark } = this.props.darkThemeStore
        setLocalDark(!!parseInt(sessionStorage.getItem("darkNow")))
    }
    render() {
        return <>{this.props.children}</>
    }
}

import React from "react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { inject, observer } from "mobx-react"
import { AuthenticatedStoreType } from "@stores/AuthenticatedStore"

interface LocalStatesInjectProps
    extends OnlyDarkThemeStoreType,
        AuthenticatedStoreType {}

/**
 * 本地状态注入盒子
 */
@inject("authenticatedStore")
@inject("darkThemeStore")
@observer
export default class LocalStatesInjectBox extends React.Component<
    LocalStatesInjectProps
> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
            authenticatedStore: mobxStore.authenticatedStore,
        }
    }
    componentDidMount() {
        const { setLocalDark } = this.props.darkThemeStore
        setLocalDark(!!parseInt(sessionStorage.getItem("darkNow")))
        const uid = sessionStorage.getItem("uid")
        if (uid) {
            const { setLocalAuthed } = this.props.authenticatedStore
            switch (/^([\S])/.exec(uid)[0]) {
                case "u": {
                    setLocalAuthed(uid, "user")
                    break
                }
                case "g": {
                    setLocalAuthed(uid, "group")
                    break
                }
                default: {
                    return
                }
            }
        }
    }
    render() {
        return <>{this.props.children}</>
    }
}

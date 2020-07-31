import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
const oaBasicStyle = require("@styles/components/oa/OABasic.module.css")

@inject("darkThemeStore")
@observer
export default class OABasicBox extends React.Component<
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
            <div className={oaBasicStyle.content}>
                <div
                    className={
                        darkNow
                            ? oaBasicStyle.basicDark
                            : oaBasicStyle.basicLight
                    }
                >
                    {this.props.children}
                </div>
            </div>
        )
    }
}

import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"

const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

/**
 * CommonBox组件视觉一致化设计
 */
@inject("darkThemeStore")
@observer
export default class CommonBox extends React.Component<OnlyDarkThemeStoreType> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                className={
                    darkNow
                        ? commonBoxStyle.contentDark
                        : commonBoxStyle.contentLight
                }
            >
                {this.props.children}
            </div>
        )
    }
}

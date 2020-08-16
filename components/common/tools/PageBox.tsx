import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"
import { isMemorizedDays } from "@utils/utils"

const pageBoxStyle = require("@styles/components/common/PageBox.module.css")

/**
 * 页面整体样式控制盒子组件
 */
@inject("darkThemeStore")
@observer
export default class PageBox extends React.Component<OnlyDarkThemeStoreType> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                style={{
                    filter: isMemorizedDays().is ? "grayscale(1)" : "",
                    WebkitFilter: isMemorizedDays().is ? "grayscale(1)" : "",
                }}
                className={
                    darkNow ? pageBoxStyle.pageDark : pageBoxStyle.pageLight
                }
            >
                {this.props.children}
            </div>
        )
    }
}

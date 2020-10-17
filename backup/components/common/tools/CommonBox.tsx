import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"

const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

interface ICommonBoxProps extends OnlyDarkThemeStoreType {
    header: string
}

/**
 * CommonBox组件视觉一致化设计
 */
@inject("darkThemeStore")
@observer
export default class CommonBox extends React.Component<ICommonBoxProps> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        const { header } = this.props
        return (
            <div
                className={
                    darkNow
                        ? commonBoxStyle.contentDark
                        : commonBoxStyle.contentLight
                }
            >
                <div className={commonBoxStyle.boxHeader}>{header}</div>
                <div className={commonBoxStyle.boxContent}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

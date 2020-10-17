import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"

const actsTimelineStyle = require("@styles/components/users/ActsTimeline.module.css")

interface IActsTimelineProps extends OnlyDarkThemeStoreType {
    uid: string
}

/**
 * 动态时间线
 */
@inject("darkThemeStore")
@observer
export default class ActsTimeline extends React.Component<IActsTimelineProps> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <ul
                style={{
                    color: darkNow ? "white" : "",
                }}
                className={actsTimelineStyle.content}
            >
                <li>
                    <div className={actsTimelineStyle.title}>
                        xxxx-xx-xx 认同了
                    </div>
                    <div className={actsTimelineStyle.card}>
                        帖子标题
                        <div>帖子简述xxxx</div>
                    </div>
                </li>
            </ul>
        )
    }
}

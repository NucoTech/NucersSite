import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"
import dynamic from "next/dynamic"
const ShortMessage = dynamic(import("@components/common/ShortMessage"), {
    ssr: false,
})

const commentsStyle = require("@styles/components/posts/Comments.module.css")
/**
 * 目前不支持markdown类型的评论，锚点定位有失灵的情况，重写此部分
 */
@inject("darkThemeStore")
@observer
export default class Comments extends React.Component<OnlyDarkThemeStoreType> {
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
                        ? commentsStyle.contentDark
                        : commentsStyle.contentLight
                }
            >
                {/* 输入框 */}
                <div id="comments-box" className={commentsStyle.inputBox}>
                    <ShortMessage msgtype="comment" />
                </div>
                {/* 考虑做分页处理 */}
                {/* 考虑引用回复 */}
                <ul>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                    <li>
                        <a href="#">xxxx</a> said: xxxxxxxxxxxxxxxxxx
                    </li>
                </ul>
            </div>
        )
    }
}

import React from "react"
import { isNightNow } from "@utils/utils"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

export default class HotPosts extends React.Component {
    render() {
        return (
            <div
                className={
                    isNightNow()
                        ? commonBoxStyle.contentDark
                        : commonBoxStyle.contentLight
                }
            >
                <div className={commonBoxStyle.boxHeader}>热门帖子</div>
                <div className={commonBoxStyle.boxContent}>
                    <ul>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                        <li>测试</li>
                    </ul>
                </div>
            </div>
        )
    }
}

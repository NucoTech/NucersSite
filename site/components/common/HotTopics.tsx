import React from "react"
import { isNightNow } from "@utils/utils"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

/**
 * 热门话题
 */
export default class HotTopics extends React.Component {
    render() {
        return (
            <div
                className={
                    isNightNow()
                        ? commonBoxStyle.contentDark
                        : commonBoxStyle.contentLight
                }
            >
                <div className={commonBoxStyle.boxHeader}>热门话题</div>
                <div className={commonBoxStyle.boxContent}>
                    <ul>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                        <li>话题目录</li>
                    </ul>
                </div>
            </div>
        )
    }
}

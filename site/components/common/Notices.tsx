import React from "react"
import { isNightNow } from "@utils/utils"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

export default class Notices extends React.Component {
    render() {
        return (
            <div
                className={
                    isNightNow()
                        ? commonBoxStyle.contentDark
                        : commonBoxStyle.contentLight
                }
            >
                <div className={commonBoxStyle.boxHeader}>公告发布</div>
                <div className={commonBoxStyle.boxContent}>
                    <ul>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                        <li>公告</li>
                    </ul>
                </div>
            </div>
        )
    }
}

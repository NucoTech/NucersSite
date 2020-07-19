import React from "react"
import { isNightNow } from "@utils/utils"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

/**
 * 新加入成员组件
 */
export default class Newers extends React.Component {
    render() {
        return (
            <div
                className={
                    isNightNow()
                        ? commonBoxStyle.contentDark
                        : commonBoxStyle.contentLight
                }
            >
                <div className={commonBoxStyle.boxHeader}>新加入成员</div>
                <div className={commonBoxStyle.boxContent}>
                    <ul>
                        <li>avatar</li>
                        <li>avatar</li>
                        <li>avatar</li>
                        <li>avatar</li>
                        <li>avatar</li>
                        <li>avatar</li>
                    </ul>
                </div>
            </div>
        )
    }
}

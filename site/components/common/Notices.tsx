import React from "react"
import CommonBox from "./CommonBox"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

export default class Notices extends React.Component {
    render() {
        return (
            <CommonBox>
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
            </CommonBox>
        )
    }
}

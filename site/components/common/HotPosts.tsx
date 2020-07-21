import React from "react"
import CommonBox from "./CommonBox"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

export default class HotPosts extends React.Component {
    render() {
        return (
            <CommonBox>
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
            </CommonBox>
        )
    }
}

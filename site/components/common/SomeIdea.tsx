import React from "react"
import CommonBox from "./CommonBox"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")
/**
 * 一点想法组件
 */
export default class SomeIdea extends React.Component {
    render() {
        return (
            <CommonBox>
                <div className={commonBoxStyle.boxHeader}>一点想法</div>
                <div className={commonBoxStyle.boxContent}>
                    <div>
                        <input type="text" placeholder="分享你的idea..." />
                        <button>Send</button>
                    </div>
                    <ul>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                        <li>xxx said: xxxxxx</li>
                    </ul>
                </div>
            </CommonBox>
        )
    }
}

import React from "react"

const actsTimelineStyle = require("@styles/components/users/ActsTimeline.module.css")

interface IActsTimelineProps {
    uid: string
}

/**
 * 动态时间线，伪元素实现时间线样式
 */
export default class ActsTimeline extends React.Component<IActsTimelineProps> {
    render() {
        return (
            <ul className={actsTimelineStyle.content}>
                <li>
                    <div className={actsTimelineStyle.title}>
                        xxxx-xx-xx 认同了
                    </div>
                    <div className={actsTimelineStyle.card}>
                        帖子标题
                        <div>帖子简述xxxx</div>
                    </div>
                </li>
                <li>
                    <div className={actsTimelineStyle.title}>
                        xxxx-xx-xx 认同了
                    </div>
                    <div className={actsTimelineStyle.card}>
                        帖子标题
                        <div>帖子简述xxxx</div>
                    </div>
                </li>
                <li>
                    <div className={actsTimelineStyle.title}>
                        xxxx-xx-xx 认同了
                    </div>
                    <div className={actsTimelineStyle.card}>
                        帖子标题
                        <div>帖子简述xxxx</div>
                    </div>
                </li>
                <li>
                    <div className={actsTimelineStyle.title}>
                        xxxx-xx-xx 认同了
                    </div>
                    <div className={actsTimelineStyle.card}>
                        帖子标题
                        <div>帖子简述xxxx</div>
                    </div>
                </li>
                <li>
                    <div className={actsTimelineStyle.title}>
                        xxxx-xx-xx 认同了
                    </div>
                    <div className={actsTimelineStyle.card}>
                        帖子标题
                        <div>帖子简述xxxx</div>
                    </div>
                </li>
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

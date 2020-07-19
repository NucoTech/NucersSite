import React from "react"
import { isNightNow } from "@utils/utils"
const commonBoxStyle = require("@styles/components/common/CommonBox.module.css")

interface IHotTopicsProps {}

interface IHotTopicsStates {
    topics: Array<string>
}

/**
 * 热门话题
 */
export default class HotTopics extends React.Component<
    IHotTopicsProps,
    IHotTopicsStates
> {
    constructor(props: IHotTopicsProps) {
        super(props)
        this.state = {
            topics: [],
        }
    }

    componentDidMount() {
        // 在此请求回去话题数据
        const topics = [
            "话题一",
            "话题二",
            "话题三",
            "话题四",
            "话题五",
            "话题六",
            "话题七",
            "话题八",
            "话题九",
            "话题十",
            "话题十一",
            "话题十二",
            "话题十三",
            "话题十四",
            "话题十五",
        ]
        this.setState({
            topics,
        })
    }
    render() {
        const { topics } = this.state
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
                        {topics.map((item: string, index: number) => (
                            <li
                                key={`topic-${index}`}
                                style={{ color: index === 0 ? "red" : "green" }}
                            >
                                <span style={{
                                    width: "60px",
                                }}>{index + 1}</span>

                                <span>#{item}#</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

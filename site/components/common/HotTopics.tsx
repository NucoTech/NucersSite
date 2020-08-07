import React from "react"

const hotTopicsStyle = require("@styles/components/common/HotTopics.module.css")

import CommonBox from "./tools/CommonBox"

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
            "话题十五测试测试测试测试",
        ]
        this.setState({
            topics,
        })
    }
    render() {
        const { topics } = this.state
        return (
            <CommonBox header="热门话题">
                <ul className={hotTopicsStyle.list}>
                    {topics.map((item: string, index: number) => (
                        <li key={`topic-${index}`}>
                            <div className={hotTopicsStyle.rate}>
                                {index + 1}
                            </div>
                            <div className={hotTopicsStyle.ellipsis}>
                                <a
                                    href={`/s?topic=${item}`}
                                    title={`#${item}#`}
                                >
                                    #{item}#
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </CommonBox>
        )
    }
}

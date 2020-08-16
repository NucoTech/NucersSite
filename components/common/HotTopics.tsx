import React from "react"

const hotTopicsStyle = require("@styles/components/common/HotTopics.module.css")

import CommonBox from "./tools/CommonBox"

interface IHotTopicsProps {
    topics: Array<string>
}

interface IHotTopicsStates {}

/**
 * 热门话题
 */
export default class HotTopics extends React.Component<
    IHotTopicsProps,
    IHotTopicsStates
> {
    static defaultProps: IHotTopicsProps = {
        topics: [],
    }
    render() {
        const { topics } = this.props
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

import ContentBox from "@/components/common/ContentBox/ContentBox"
import React from "react"

import style from "./HotTopics.less"

interface IHotTopicsProps {
    topics: Array<string>
}

export default ({ topics = [] }: IHotTopicsProps) => (
    <ContentBox>
        <ul className={style.list}>
            {topics.map((item: string, index: number) => (
                <li key={`topic-${index}`}>
                    <div className={style.rate}>{index + 1}</div>
                    <div className={style.ellipsis}>
                        <a href={`/s?topic=${item}`} title={`#${item}#`}>
                            #{item}#
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    </ContentBox>
)

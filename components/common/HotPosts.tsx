import React from "react"

const commonListStyle = require("@styles/components/common/CommonList.module.css")

import CommonBox from "./tools/CommonBox"
import { IPostInfos, IPostInfo } from "@utils/interfaces"

interface IHotPostsProps {
    posts: IPostInfos
}

export default class HotPosts extends React.Component<IHotPostsProps> {
    static defaultProps: IHotPostsProps = {
        posts: [],
    }
    render() {
        const { posts } = this.props
        return (
            <CommonBox header="热门帖子">
                <ol className={commonListStyle.ol}>
                    {posts.map((item: IPostInfo) => (
                        <li key={item.poid}>
                            <div className={commonListStyle.ellipsis}>
                                <a href={`/p/${item.poid}`} title={item.title}>
                                    {item.title}
                                </a>
                            </div>
                            <span className={commonListStyle.time}>
                                {item.time}
                            </span>
                        </li>
                    ))}
                </ol>
            </CommonBox>
        )
    }
}

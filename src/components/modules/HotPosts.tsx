import React from "react"
import ContentBox from "../common/ContentBox/ContentBox"

import { IPostInfos, IPostInfo } from "@/utils/interfaces"

import style from "@/components/modules/commonList.less"

interface IHotPostsProps {
    posts: IPostInfos
}

export default ({ posts = [] }: IHotPostsProps) => (
    <ContentBox>
        <ol className={style.ol}>
            {posts.map((item: IPostInfo) => (
                <li key={item.poid}>
                    <div className={style.ellipsis}>
                        <a href={`/p/${item.poid}`} title={item.title}>
                            {item.title}
                        </a>
                    </div>
                    <span className={style.time}>{item.time}</span>
                </li>
            ))}
        </ol>
    </ContentBox>
)

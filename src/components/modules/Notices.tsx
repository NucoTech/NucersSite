import React from "react"

import style from "./commonList.less"

import { INotices, INotice } from "@/utils/interfaces"
import ContentBox from "../common/ContentBox/ContentBox"

interface INoticesProps {
    notices: INotices
}

export default ({ notices = [] }: INoticesProps) => (
    <ContentBox header="公告">
        <ol className={style.ol}>
            {notices.map((item: INotice) => (
                <li key={item.noid}>
                    <div className={style.ellipsis}>
                        <a href={`/notice/${item.noid}`} title={item.title}>
                            {item.title}
                        </a>
                    </div>
                </li>
            ))}
        </ol>
    </ContentBox>
)

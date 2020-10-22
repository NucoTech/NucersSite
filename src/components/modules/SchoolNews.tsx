import React from "react"

import style from "./commonList.less"
import { ICommonNewss, ICommonNews } from "@/utils/interfaces"
import ContentBox from "../common/ContentBox/ContentBox"

interface SchoolNewsProps {
    news?: ICommonNewss
}

export default ({ news = [] }: SchoolNewsProps) => (
    <ContentBox header="校园新闻">
        {news.length !== 0 && (
            <ol className={style.ol}>
                {news.map((item: ICommonNews) => (
                    <li key={item.href}>
                        <div className={style.ellipsis}>
                            <a href={item.href} title={item.title}>
                                {item.title}
                            </a>
                        </div>
                        <span className={style.time}>{item.time}</span>
                    </li>
                ))}
            </ol>
        )}
        {news.length === 0 && (
            <div
                style={{
                    width: "100%",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                暂无数据
            </div>
        )}
    </ContentBox>
)

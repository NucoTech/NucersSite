import React from "react"

import style from "./commonList.less"

import { ICommonNews, ICommonNewss } from "@/utils/interfaces"
import ContentBox from "../common/ContentBox/ContentBox"

interface SchoolAcademicActsProps {
    acts?: ICommonNewss
}

export default ({ acts = [] }: SchoolAcademicActsProps) => (
    <ContentBox header="学术活动">
        {acts.length !== 0 && (
            <ol className={style.ol}>
                {acts.map((item: ICommonNews) => (
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
        {acts.length === 0 && (
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

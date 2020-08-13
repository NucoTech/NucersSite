import React from "react"

const commonListStyle = require("@styles/components/common/CommonList.module.css")

import CommonBox from "./tools/CommonBox"
import { ICommonNewss, ICommonNews } from "@utils/interfaces"

interface SchoolNewsProps {
    news: ICommonNewss
}

export default class SchoolNews extends React.Component<SchoolNewsProps> {
    static defaultProps: SchoolNewsProps = {
        news: [],
    }
    render() {
        const { news } = this.props
        return (
            <CommonBox header="校园新闻">
                {news.length !== 0 && (
                    <ol className={commonListStyle.ol}>
                        {news.map((item: ICommonNews) => (
                            <li key={item.href}>
                                <div className={commonListStyle.ellipsis}>
                                    <a href={item.href} title={item.title}>
                                        {item.title}
                                    </a>
                                </div>
                                <span className={commonListStyle.time}>
                                    {item.time}
                                </span>
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
            </CommonBox>
        )
    }
}

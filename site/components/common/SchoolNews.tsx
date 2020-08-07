import React from "react"

const commonListStyle = require("@styles/components/common/CommonList.module.css")

import CommonBox from "./tools/CommonBox"

const news = [
    { id: "324234234", title: "测试" },
    { id: "2346223423t234", title: "公告" },
    { id: "sdfadadfasdfa", title: "测试公告" },
    {
        id: "qwrwerqwrqwer",
        title:
            "啊实dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打实大苏打锕",
    },
    { id: "werawerawera", title: "ASDFASDFASDF" },
    { id: "dxcasdfasd", title: "GQWWEQWERQWEW" },
    { id: "asdfafadfadfasdf", title: "QWERQWERQWERQWE" },
]

export default class SchoolNews extends React.Component {
    render() {
        return (
            <CommonBox header="校园新闻">
                <ol className={commonListStyle.ol}>
                    {news.map((item) => (
                        <li key={item.id}>
                            <div className={commonListStyle.ellipsis}>
                                <a
                                    href={`/news/${item.id}`}
                                    title={item.title}
                                >
                                    {item.title}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </CommonBox>
        )
    }
}

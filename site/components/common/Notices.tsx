import React from "react"

const commonListStyle = require("@styles/components/common/CommonList.module.css")

import CommonBox from "./tools/CommonBox"
import { INotices } from "@utils/interfaces"

const notices: INotices = [
    { noid: "324234234", title: "测试" },
    { noid: "2346223423t234", title: "公告" },
    { noid: "sdfadadfasdfa", title: "测试公告" },
    {
        noid: "qwrwerqwrqwer",
        title:
            "啊实dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd打实大苏打锕",
    },
    { noid: "werawerawera", title: "ASDFASDFASDF" },
    { noid: "dxcasdfasd", title: "GQWWEQWERQWEW" },
    { noid: "asdfafadfadfasdf", title: "QWERQWERQWERQWE" },
]

export default class Notices extends React.Component {
    render() {
        return (
            <CommonBox header="公告">
                <ol className={commonListStyle.ol}>
                    {notices.map((item) => (
                        <li key={item.noid}>
                            <div className={commonListStyle.ellipsis}>
                                <a
                                    href={`/notice/${item.noid}`}
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

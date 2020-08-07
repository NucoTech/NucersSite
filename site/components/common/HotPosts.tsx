import React from "react"

const commonListStyle = require("@styles/components/common/CommonList.module.css")

import CommonBox from "./tools/CommonBox"

const posts = [
    { id: "po324234234", title: "测试" },
    { id: "po2346223423t234", title: "公告" },
    { id: "posdfadadfasdfa", title: "测试公告" },
    { id: "poqwrwerqwrqwer", title: "啊实打实dfsdfsdfsdffffffgsdfg dsfgs dfg sdfg sdfg dsfgsdfgsdfgsdfg sdfgs fgsfg sdfg sdfg sdfg sdfg sdfg sdfg sfffffffffffffffffffffffffffsdfsdfsdfsdf大苏打锕" },
    { id: "powerawerawera", title: "ASDFASDFASDF" },
    { id: "podxcasdfasd", title: "GQWWEQWERQWEW" },
    { id: "poasdfafadfadfasdf", title: "QWERQWERQWERQWE" },
]

export default class HotPosts extends React.Component {
    render() {
        return (
            <CommonBox header="热门帖子">
                <ol className={commonListStyle.ol}>
                    {posts.map((item) => (
                        <li key={item.id}>
                            <div className={commonListStyle.ellipsis}>
                                <a href={`/p/${item.id}`} title={item.title}>
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

import React from "react"

const commonListStyle = require("@styles/components/common/CommonList.module.css")

import CommonBox from "./tools/CommonBox"
import { INotices, INotice } from "@utils/interfaces"

interface INoticesProps {
    notices: INotices
}

export default class Notices extends React.Component<INoticesProps> {
    static defaultProps: INoticesProps = {
        notices: [],
    }
    render() {
        const { notices } = this.props
        return (
            <CommonBox header="公告">
                <ol className={commonListStyle.ol}>
                    {notices.map((item: INotice) => (
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

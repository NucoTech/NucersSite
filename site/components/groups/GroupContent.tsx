import React from "react"
import { IGroupContent, ICommonNews, INotice } from "@utils/interfaces"
import Activities from "@components/common/Activities"

const groupContentStyle = require("@styles/components/groups/GroupContent.module.css")

interface IGroupContentProps extends IGroupContent {}

export default class GroupContent extends React.Component<IGroupContentProps> {
    static defaultProps: IGroupContentProps = {
        notices: [],
        activities: [],
    }
    render() {
        const { notices, activities } = this.props
        return (
            <div className={groupContentStyle.content}>
                <div className={groupContentStyle.important}>
                    <div className={groupContentStyle.subleft}>
                        <Activities acts={activities} />
                    </div>
                    <div className={groupContentStyle.subright}>
                        <div className={groupContentStyle.noticeTitle}>
                            公告
                        </div>
                        {notices.length !== 0 && (
                            <ul className={groupContentStyle.notices}>
                                {notices.map((item: INotice) => (
                                    <li
                                        key={item.noid}
                                        onClick={() => {
                                            window.open(
                                                `/notices/${item.noid}`,
                                                "_blank"
                                            )
                                        }}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                        {notices.length === 0 && <div>暂无公告</div>}
                    </div>
                </div>
                <div className={groupContentStyle.next}>成果展示</div>
            </div>
        )
    }
}

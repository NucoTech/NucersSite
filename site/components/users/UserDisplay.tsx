import React from "react"
import { Tabs } from "antd"
import ActsTimeline from "./ActsTimeline"
const { TabPane } = Tabs

const userDisplayStyle = require("@styles/components/users/UserDisplay.module.css")

interface IUserDisplayProps {
    uid: string
}

interface IUserMenu {
    name: string
    url: string
    content: any
}

const UserMenu: Array<IUserMenu> = [
    { name: "时间线", url: "", content: <ActsTimeline uid="asdasd" /> },
    { name: "帖子", url: "", content: "" },
    { name: "想法", url: "", content: "" },
]

export default class UserDisplay extends React.Component<IUserDisplayProps> {
    render() {
        return (
            <div className={userDisplayStyle.content}>
                <Tabs defaultActiveKey="时间线">
                    {UserMenu.map((item: IUserMenu) => (
                        <TabPane tab={item.name} key={item.name}>
                            {item.content}
                        </TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}

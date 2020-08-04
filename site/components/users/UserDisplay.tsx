import React from "react"
import { Tabs } from "antd"
import ActsTimeline from "./ActsTimeline"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
const { TabPane } = Tabs

const userDisplayStyle = require("@styles/components/users/UserDisplay.module.css")

interface IUserDisplayProps extends OnlyDarkThemeStoreType {
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

@inject("darkThemeStore")
@observer
export default class UserDisplay extends React.Component<IUserDisplayProps> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                style={{
                    backgroundColor: darkNow
                        ? "var(--theme-commonbox-night)"
                        : "white",
                    color: darkNow ? "white" : "black",
                }}
                className={userDisplayStyle.content}
            >
                <Tabs
                    defaultActiveKey="时间线"
                    style={{
                        color: darkNow ? "white" : "",
                    }}
                >
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

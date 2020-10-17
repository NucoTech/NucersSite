import React from "react"
import { Tabs } from "antd"
import ActsTimeline from "./ActsTimeline"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"
import { IUserDisplay } from "@utils/interfaces"
const { TabPane } = Tabs

const userDisplayStyle = require("@styles/components/users/UserDisplay.module.css")

interface IUserDisplayProps extends OnlyDarkThemeStoreType, IUserDisplay {}

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

enum TabNow {
    "timeline" = "时间线",
    "posts" = "帖子",
    "ideas" = "想法",
}

@inject("darkThemeStore")
@observer
export default class UserDisplay extends React.Component<IUserDisplayProps> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    static defaultProps: IUserDisplayProps = {
        target: "timeline",
        datas: [],
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        const { target } = this.props
        return (
            <div
                style={{
                    backgroundColor: darkNow
                        ? "var(--theme-commonbox-night)"
                        : "white",
                    color: darkNow ? "white" : "black",
                    margin: "20px 0",
                }}
                className={userDisplayStyle.content}
            >
                <Tabs
                    defaultActiveKey={TabNow[target]}
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

import React from "react"
import DashBoardItem from "./DashBoardItem"

import {
    SubnodeOutlined,
    UserOutlined,
    DesktopOutlined,
    FlagOutlined,
    MoneyCollectOutlined,
    ExceptionOutlined,
} from "@ant-design/icons"
import { backOAURL } from "@utils/utils"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"

const items = [
    {
        name: "公告管理",
        url: backOAURL("info"),
        icon: (
            <DesktopOutlined
                style={{
                    fontSize: "30px",
                }}
            />
        ),
    },
    {
        name: "活动管理",
        url: backOAURL("acts"),
        icon: (
            <FlagOutlined
                style={{
                    fontSize: "30px",
                }}
            />
        ),
    },
    {
        name: "成员管理",
        url: backOAURL("members"),
        icon: (
            <UserOutlined
                style={{
                    fontSize: "30px",
                }}
            />
        ),
    },
    {
        name: "财务管理",
        url: backOAURL("finance"),
        icon: (
            <MoneyCollectOutlined
                style={{
                    fontSize: "30px",
                }}
            />
        ),
    },
    {
        name: "插件管理",
        url: backOAURL("plugins"),
        icon: (
            <SubnodeOutlined
                style={{
                    fontSize: "30px",
                }}
            />
        ),
    },
    {
        name: "技术支持",
        url: backOAURL("support"),
        icon: (
            <ExceptionOutlined
                style={{
                    fontSize: "30px",
                }}
            />
        ),
    },
]

const dashBoardShowerStyle = require("@styles/components/oa/DashBoardShower.module.css")

@inject("darkThemeStore")
@observer
export default class DashBoardShower extends React.Component<
    OnlyDarkThemeStoreType
> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                className={
                    !darkNow
                        ? dashBoardShowerStyle.showerLight
                        : dashBoardShowerStyle.showerDark
                }
            >
                <div className={dashBoardShowerStyle.groupName}>
                    Nucers, 欢迎使用Nucers社区平台
                </div>
                {/* 当前组织名称 */}
                <div>申请时间</div>
                <div>成员: 10人</div>
                <div>公告: 20条</div>
                <div>已举办活动: 10次</div>
                <div>进行中活动: 10次</div>
                <div>已举行活动: 10次</div>
                <div>付费插件数: 2个</div>
                <div>当前处理中的工单: 2个</div>
                <ul>
                    {items.map((item) => (
                        <li key={item.url}>
                            <DashBoardItem {...item} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

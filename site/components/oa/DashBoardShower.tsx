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
        url: backOAURL("notices"),
        icon: (
            <DesktopOutlined
                style={{
                    fontSize: "30px",
                    color: "#4045bf",
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
                    color: "#862d2e",
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
                    color: "#4083bf",
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
                    color: "#bf4040",
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
                    color: "#f14e32",
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
                    color: "#09aeb0",
                }}
            />
        ),
    },
]

const dashBoardShowerStyle = require("@styles/components/oa/DashBoardShower.module.css")

interface IDashBoardShowerStates {
    name: string
    applyTime: string
    members: number
    notices: number
    actsDone: number
    actsDoing: number
    actsWill: number
    plugins: number
    workorders: number
}

@inject("darkThemeStore")
@observer
export default class DashBoardShower extends React.Component<
    OnlyDarkThemeStoreType,
    IDashBoardShowerStates
> {
    constructor(props: OnlyDarkThemeStoreType) {
        super(props)
        this.state = {
            name: "",
            applyTime: "xxxx-xx-xx",
            members: 0,
            notices: 0,
            actsDone: 0,
            actsDoing: 0,
            actsWill: 0,
            plugins: 0,
            workorders: 0,
        }
    }
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        this.setState({
            name: "Nucers"
        })
    }
    render() {
        const { darkNow } = this.props.darkThemeStore
        const {
            name,
            applyTime,
            members,
            notices,
            actsDoing,
            actsDone,
            actsWill,
            plugins,
            workorders,
        } = this.state
        return (
            <div
                className={
                    !darkNow
                        ? dashBoardShowerStyle.showerLight
                        : dashBoardShowerStyle.showerDark
                }
            >
                <div className={dashBoardShowerStyle.groupWelcome}>
                    『 {name} 』, 欢迎使用Nucers社区平台
                </div>
                <div className={dashBoardShowerStyle.sameLine}>
                    <div className={dashBoardShowerStyle.infos}>
                        申请时间: <span>{applyTime}</span>
                    </div>
                    <div className={dashBoardShowerStyle.infos}>
                        成员: <span>{members}</span>人
                    </div>
                    <div className={dashBoardShowerStyle.infos}>
                        公告: <span>{notices}</span>条
                    </div>
                </div>

                <div className={dashBoardShowerStyle.sameLine}>
                    <div className={dashBoardShowerStyle.infos}>
                        活动已举行: <span>{actsDone}</span>次
                    </div>
                    <div className={dashBoardShowerStyle.infos}>
                        进行中: <span>{actsDoing}</span>次
                    </div>
                    <div className={dashBoardShowerStyle.infos}>
                        计划中: <span>{actsWill}</span>次
                    </div>
                </div>

                <div className={dashBoardShowerStyle.infos}>
                    插件数: <span>{plugins}</span>个
                </div>
                <div className={dashBoardShowerStyle.infos}>
                    当前处理中的工单: <span>{workorders}</span>个
                </div>
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

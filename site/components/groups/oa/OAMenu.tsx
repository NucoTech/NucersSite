import React from "react"
import { Menu, Button } from "antd"
import {
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ClusterOutlined,
    SubnodeOutlined,
    UserSwitchOutlined,
    UserAddOutlined,
    DesktopOutlined,
    MessageOutlined,
    FlagOutlined,
    MoneyCollectOutlined,
    PoweroffOutlined,
    ExceptionOutlined,
    DashboardOutlined,
    KeyOutlined,
} from "@ant-design/icons"

import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import { backOAURL } from "@utils/utils"

const { SubMenu } = Menu

const oaMenuStyle = require("@styles/components/groups/oa/OAMenu.module.css")

interface IOAMenuProps extends OnlyDarkThemeStoreType {}

/**
 * 合法菜单列表
 */
export const ValidMenu: Array<string> = [
    "info",
    "notices",
    "acts",
    "members",
    "members-add",
    "finance",
    "plugins",
    "support",
    "security",
]

interface IOAMenuStates {
    collapsed: boolean
    isOpened: boolean
}

@inject("darkThemeStore")
@observer
export default class OAMenu extends React.Component<
    IOAMenuProps,
    IOAMenuStates
> {
    constructor(props: IOAMenuProps) {
        super(props)
        this.state = {
            collapsed: true,
            isOpened: false,
        }
    }
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    toggleCollapsed() {
        const funcMenuStyle = document.getElementById("funcMenu").style
        if (document.body.clientWidth <= 1024) {
            const { isOpened } = this.state

            if (isOpened) {
                funcMenuStyle.visibility = "hidden"
                funcMenuStyle.height = "0px"
            } else {
                funcMenuStyle.visibility = "visible"
                funcMenuStyle.height = "calc(100vh - 70px)"
            }
            this.setState({
                isOpened: !isOpened,
                collapsed: false,
            })
        } else {
            funcMenuStyle.visibility = "visible"
            funcMenuStyle.height = "calc(100vh - 70px)"
            this.setState({
                collapsed: !this.state.collapsed,
            })
        }
    }
    render() {
        const { darkNow, setDark } = this.props.darkThemeStore
        return (
            <div
                style={{
                    width: 256,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: 999,
                }}
            >
                <div
                    style={{
                        backgroundColor: darkNow ? "#001529" : "white",
                        color: darkNow ? "white" : "black",
                        width: "100vw",
                        height: "70px",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div>
                        <Button
                            type="primary"
                            onClick={() => {
                                sessionStorage.setItem(
                                    "darkNow",
                                    String(!darkNow ? String(1) : String(0))
                                )
                                setDark()
                            }}
                        >
                            <PoweroffOutlined />
                        </Button>
                        <Button
                            type="primary"
                            onClick={() => this.toggleCollapsed()}
                        >
                            {React.createElement(
                                this.state.collapsed
                                    ? MenuUnfoldOutlined
                                    : MenuFoldOutlined
                            )}
                        </Button>
                    </div>

                    <div
                        style={{
                            fontSize: "large",
                            fontWeight: 300,
                            margin: "0 40px",
                        }}
                    >
                        Nucers Group后台管理系统
                    </div>
                </div>

                <Menu
                    id="funcMenu"
                    inlineCollapsed={this.state.collapsed}
                    mode="inline"
                    theme={darkNow ? "dark" : "light"}
                    className={oaMenuStyle.funcMenu}
                >
                    <Menu.Item icon={<DashboardOutlined />}>
                        <a href={backOAURL("")}>控制台</a>
                    </Menu.Item>
                    <SubMenu
                        key="webManagement"
                        title="门户管理"
                        icon={<ClusterOutlined />}
                    >
                        <Menu.Item icon={<DesktopOutlined />}>
                            <a href={backOAURL("info")}>信息维护</a>
                        </Menu.Item>
                        <Menu.Item icon={<MessageOutlined />}>
                            <a href={backOAURL("notices")}>公告管理</a>
                        </Menu.Item>
                        <Menu.Item icon={<FlagOutlined />}>
                            <a href={backOAURL("acts")}>活动管理</a>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="peopleSub"
                        title="成员管理"
                        icon={<UserOutlined />}
                    >
                        <Menu.Item
                            key="people-management"
                            icon={<UserSwitchOutlined />}
                        >
                            <a href={backOAURL("members")}>成员管理</a>
                        </Menu.Item>
                        <Menu.Item key="people-add" icon={<UserAddOutlined />}>
                            <a href={backOAURL("members-add")}>新增成员</a>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <a href={backOAURL("finance")}>财务管理</a>
                    </Menu.Item>
                    <Menu.Item icon={<SubnodeOutlined />}>
                        <a href={backOAURL("plugins")}>插件管理</a>
                    </Menu.Item>
                    <Menu.Item icon={<ExceptionOutlined />}>
                        <a href={backOAURL("support")}>技术支持</a>
                    </Menu.Item>
                    <Menu.Item icon={<KeyOutlined />}>
                        <a href={backOAURL("security")}>账户安全</a>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}

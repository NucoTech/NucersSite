import React from "react"
import IconFont from "./tools/IconFont"
import { searchEngineLexer } from "@utils/utils"
import DarkSwitcher from "./tools/DarkSwitcher"
import { inject, observer } from "mobx-react"
import { AuthenticatedStoreType } from "@stores/AuthenticatedStore"

const navBarStyle = require("@styles/components/common/NavBar.module.css")

/**
 * @param {string} url 链接
 * @param {title} title 标题
 */
export interface MyNav {
    url?: string
    title: string
}

export interface SubNav {
    group: string
    children?: Array<MyNav>
}

/**
 * @param {string} url 链接
 * @param {title} title 标题
 * @param {Array<SubNav>} children 子导航
 */
export interface INav extends MyNav {
    children?: Array<SubNav>
}

interface INavProps extends AuthenticatedStoreType {
    navs?: Array<INav>
}

interface INavStates {
    search: string
}

/**
 * 导航栏组件，需要设置默认值
 */
@inject("authenticatedStore")
@observer
export default class NavBar extends React.Component<INavProps, INavStates> {
    constructor(props: INavProps) {
        super(props)
        this.state = {
            search: "",
        }
    }

    static async getServerSideProps({ mobxStore }) {
        return {
            authenticatedStore: mobxStore.authenticatedStore,
        }
    }

    // 默认props
    static defaultProps: INavProps = {
        navs: [
            { title: "广场", url: "/" },
            {
                title: "组织",
                url: "/g",
                children: [
                    {
                        group: "社团组织",
                        children: [
                            {
                                title: "大数据协会",
                                url: "/g/g0",
                            },
                            {
                                title: "信息对抗协会",
                                url: "/g/g1",
                            },
                        ],
                    },
                    {
                        group: "校级组织",
                        children: [],
                    },
                ],
            },
            { title: "趋势", url: "/trends" },
        ],
    }

    changeSearch = (e: any) => {
        this.setState({
            search: e.target.value || "",
        })
    }

    search4Result = () => {
        const { search } = this.state
        // 判断search是否为空
        if (!search) return
        const searchNodes = searchEngineLexer(search)
        console.log(searchNodes)
        // 跳转搜索答案页
    }

    render() {
        const { navs } = this.props
        const {
            authed,
            utype,
            uid,
            setLocalAuthed,
        } = this.props.authenticatedStore
        const { search } = this.state
        return (
            <div className={navBarStyle.navbar}>
                <div className={navBarStyle.navbarLeft}>
                    {/* <img src="/logo.svg" alt="logo" /> */}
                    <b style={{ color: "white" }}>Nucers</b>

                    {navs && (
                        <ul className={navBarStyle.navbarNavs}>
                            {navs.map((item: INav) => (
                                <li key={item.title}>
                                    {item.children &&
                                    item.children.length !== 0 ? (
                                        // 这里有子导航的项目，直接禁掉url的跳转
                                        <div
                                            className={
                                                navBarStyle.navbarSubNavs
                                            }
                                        >
                                            <a>{item.title}</a>
                                            <div
                                                className={
                                                    navBarStyle.navbarSubNavsBox
                                                }
                                            >
                                                {/* 遍历子导航 */}
                                                {item.children.map(
                                                    (subGroup: SubNav) => (
                                                        <div
                                                            key={`subnav-group-${subGroup.group}`}
                                                            className={
                                                                navBarStyle.navbarSubGroup
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    navBarStyle.navbarSubGroupTitle
                                                                }
                                                            >
                                                                {subGroup.group}
                                                            </span>
                                                            <ul>
                                                                {subGroup.children.map(
                                                                    (
                                                                        subItem: MyNav
                                                                    ) => (
                                                                        <li
                                                                            key={`subnav-${subItem.title}`}
                                                                        >
                                                                            <a
                                                                                href={
                                                                                    subItem.url
                                                                                }
                                                                            >
                                                                                {
                                                                                    subItem.title
                                                                                }
                                                                            </a>
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        // 这里是无子项目
                                        <a href={item.url}>{item.title}</a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className={navBarStyle.navbarRight}>
                    <div className={navBarStyle.navbarSearchBox}>
                        <input
                            type="search"
                            placeholder="search"
                            className={navBarStyle.navbarSearch}
                            onChange={(e) => this.changeSearch(e)}
                            autoComplete="off"
                        />
                        <ul className={navBarStyle.navbarSearchTips}>
                            <li
                                title={search ? `搜索"${search}"` : ""}
                                onClick={() => this.search4Result()}
                            >
                                {search
                                    ? `搜索"${search}"`
                                    : "请输入搜索内容..."}
                            </li>
                            <li>
                                <a href="/p/syntax">了解Nucers搜索语法...</a>
                            </li>
                        </ul>
                    </div>

                    <div className={navBarStyle.navbarAddIcon}>
                        <div
                            style={{
                                marginRight: "15px",
                            }}
                        >
                            <DarkSwitcher />
                        </div>
                        {authed && utype === "user" && (
                            <IconFont
                                type="nucers-add"
                                title="发布一篇帖子"
                                style={{
                                    color: "var(--theme-post-add)",
                                    fontSize: "25px",
                                    cursor: "pointer",
                                }}
                                onClick={() => {
                                    window.open("/p/new", "_blank")
                                }}
                            />
                        )}
                        {!authed && (
                            <a style={{ color: "white" }} href="/login">
                                登录/注册
                            </a>
                        )}
                    </div>

                    {authed && utype === "user" && (
                        <div className={navBarStyle.navbarAvatar}>
                            <img
                                alt="avatar"
                                src="https://pic1.zhimg.com/v2-3711565b5584098ca748b50be91acdf5_xl.jpg"
                                height="40px"
                                width="40px"
                                style={{
                                    borderRadius: "20px",
                                }}
                            />
                            <ul className={navBarStyle.navbarMine}>
                                <li onClick={() => window.open(`/u/${uid}`)}>
                                    个人中心
                                </li>
                                <li
                                    onClick={() =>
                                        window.open(`/u/settings/${uid}`)
                                    }
                                >
                                    我的设置
                                </li>
                                <li
                                    onClick={() => {
                                        setLocalAuthed("uid", "user")
                                        sessionStorage.clear()
                                        location.reload()
                                        console.log("注销账号...")
                                    }}
                                >
                                    注销账号
                                </li>
                            </ul>
                        </div>
                    )}
                    {/* 组织账号登录 */}
                    {authed && utype === "group" && (
                        <a title="进入控制台" href={`/g/oa/${uid}`}>
                            {/* 设置欢迎词 */}
                            Group: Nucers
                        </a>
                    )}
                </div>
            </div>
        )
    }
}

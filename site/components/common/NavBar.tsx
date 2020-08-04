import React from "react"
import IconFont from "./IconFont"
import { searchEngineLexer } from "@utils/utils"
import DarkSwitcher from "./DarkSwitcher"

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

interface INavProps {
    navs?: Array<INav>
}

interface INavStates {
    search: string
}

/**
 * 导航栏组件，需要设置默认值
 */
export default class NavBar extends React.Component<INavProps, INavStates> {
    constructor(props: INavProps) {
        super(props)
        this.state = {
            search: "",
        }
    }

    // 默认props
    static defaultProps: INavProps = {
        navs: [
            { title: "广场", url: "/" },
            {
                title: "组织",
                url: "/groups",
                children: [
                    {
                        group: "社团组织",
                        children: [
                            {
                                title: "大数据协会",
                                url: "/groups/bigdata",
                            },
                            {
                                title: "信息对抗协会",
                                url: "/groups",
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
                    </div>

                    {
                        // 判断是否登录
                        // 登录返回头像
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
                                <li>个人中心</li>
                                <li>我的设置</li>
                                <li>注销账号</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

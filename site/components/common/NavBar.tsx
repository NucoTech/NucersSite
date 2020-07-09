import React from "react"
import "@styles/index.css"
import IconFont from "./IconFont"

const navBarStyle = require("@styles/components/common/NavBar.css")

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
 * 导航栏组件
 */
export default class NavBar extends React.Component<INavProps, INavStates> {
    constructor(props: INavProps) {
        super(props)
        this.state = {
            search: "",
        }
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
        // 正则表达式语法解析
        const searchArray: Array<string> = search.split("&&")
        const searchRegExp: RegExp = /[\s]+([\S]+):[\s]+([\s\S]+)/
        // 合法搜索头
        const validHead: Array<string> = ["title", "groups", "tags"]
        // 搜索内容节点
        let searchNodes: Map<string, string | Array<string>> = new Map<
            string,
            string | Array<string>
        >()
        searchArray.forEach((item: string) => {
            const ans: Array<string> = item.match(searchRegExp)
            // 为null匹配的时候  不合法搜索头的时候 出现title搜索头的时候
            if (!ans || !validHead.includes(ans[1]) || ans[1] === "title") {
                searchNodes.set("title", item.trim())
            } else {
                searchNodes.set(
                    ans[1],
                    ans[2].split("|").map((item: string) => item.trim())
                )
            }
        })
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
                                                            className={navBarStyle.navbarSubGroup}
                                                        >
                                                            <span className={navBarStyle.navbarSubGroupTitle}>
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
                            <li onClick={() => this.search4Result()}>
                                {search
                                    ? `搜索"${search}"`
                                    : "请输入搜索内容..."}
                            </li>
                            <li>
                                <a href="/posts/syntax">
                                    了解Nucers搜索语法...
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className={navBarStyle.navbarAddIcon}>
                        <IconFont
                            type="nucers-add"
                            style={{
                                color: "var(--theme-post-add)",
                                fontSize: "25px",
                                cursor: "pointer",
                            }}
                        />
                        <ul className={navBarStyle.navbarAddPost}>
                            <li>一点想法</li>
                            <li>一篇帖子</li>
                        </ul>
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

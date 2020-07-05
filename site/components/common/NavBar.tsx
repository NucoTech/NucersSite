import React from "react"
import "@styles/index.css"
import IconFont from "./IconFont"
const navBarStyle = require("@styles/components/common/NavBar.css")

export interface INav {
    url?: string
    title: string
    children?: Array<INav>
}

interface INavProps {
    navs?: Array<INav>
}

/**
 * 导航栏组件
 */
export default class NavBar extends React.Component<INavProps> {
    constructor(props: INavProps) {
        super(props)
    }
    render() {
        const { navs } = this.props
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
                                        // 这里有子项目的项目
                                        <></>
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
                    <input
                        type="search"
                        placeholder="search"
                        className={navBarStyle.navbarSearch}
                    />
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

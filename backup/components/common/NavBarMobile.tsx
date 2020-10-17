import React from "react"
import IconFont from "./tools/IconFont"
import { INav, SubNav, MyNav } from "./NavBar"
import DarkSwitcher from "./tools/DarkSwitcher"

const navBarMobileStyle = require("@styles/components/common/NavBarMobile.module.css")

interface INavBarMobileProps {
    navs?: Array<INav>
}

interface INavBarMobileStates {
    menuOpened: boolean
}

export default class NavBarMobile extends React.Component<
    INavBarMobileProps,
    INavBarMobileStates
> {
    constructor(props: INavBarMobileProps) {
        super(props)
        this.state = {
            menuOpened: false,
        }
    }
    // 默认props
    static defaultProps: INavBarMobileProps = {
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
    // 展开子菜单
    spreadSubNav = (index: number) => {
        const subIconDom = document.getElementById(`subicon-${index}`)
        const subNavDom = document.getElementById(`subnav-${index}`)
        const navs = document.getElementById("navs")

        let subNavHeight: number = 0
        ;[...document.getElementsByClassName(`subgroup-${index}`)].forEach(
            (item: HTMLDivElement) => {
                subNavHeight += parseFloat(
                    document.defaultView
                        .getComputedStyle(item)
                        .height.replace("px", "")
                )
            }
        )

        subIconDom.style.transform === "rotate(0deg)"
            ? ((subIconDom.style.transform = "rotate(90deg)"),
              (subNavDom.style.height = subNavHeight + "px"),
              (navs.style.height =
                  this.countNavsHeight() + subNavHeight + "px"))
            : ((subIconDom.style.transform = "rotate(0deg)"),
              (subNavDom.style.height = "0px"),
              (navs.style.height =
                  this.countNavsHeight() - subNavHeight + "px"))
    }

    countNavsHeight = (): number => {
        let navsHeight: number = 0
        ;[...document.getElementsByClassName(`navs-li`)].forEach(
            (item: HTMLDivElement) => {
                navsHeight += parseFloat(
                    document.defaultView
                        .getComputedStyle(item)
                        .height.replace("px", "")
                )
            }
        )
        return navsHeight
    }

    render() {
        const { menuOpened } = this.state
        const { navs } = this.props
        return (
            <div className={navBarMobileStyle.navbar}>
                <div className={navBarMobileStyle.logo}>
                    <b
                        style={{
                            color: "white",
                        }}
                    >
                        Nucers
                    </b>
                    <img />
                </div>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            marginRight: "10px",
                        }}
                    >
                        <DarkSwitcher />
                    </div>

                    <div className={navBarMobileStyle.menu}>
                        <IconFont
                            type="nucers-menu"
                            style={{
                                transform: `rotate(${
                                    menuOpened ? "135deg" : "0"
                                })`,
                            }}
                            className={navBarMobileStyle.icon}
                            onClick={() => {
                                this.setState({
                                    menuOpened: !this.state.menuOpened,
                                })
                            }}
                        />
                        <ul
                            id="navs"
                            style={{
                                height: `${
                                    menuOpened
                                        ? this.countNavsHeight() + "px"
                                        : 0
                                }`,
                            }}
                            className={navBarMobileStyle.navs}
                        >
                            {navs &&
                                navs.map((item: INav, index: number) => (
                                    <li key={item.title} className="navs-li">
                                        {item.children &&
                                        item.children.length !== 0 ? (
                                            <div>
                                                <IconFont
                                                    id={`subicon-${index}`}
                                                    type="nucers-arrow"
                                                    style={{
                                                        marginRight: "5px",
                                                        color:
                                                            "var(--theme-post-add)",
                                                        transform:
                                                            "rotate(0deg)",
                                                    }}
                                                />

                                                <a
                                                    onClick={() => {
                                                        this.spreadSubNav(index)
                                                    }}
                                                >
                                                    {item.title}
                                                </a>

                                                <div
                                                    id={`subnav-${index}`}
                                                    className={
                                                        navBarMobileStyle.subNav
                                                    }
                                                >
                                                    {/* 子导航遍历 */}
                                                    {item.children.map(
                                                        (subGroup: SubNav) => (
                                                            <div
                                                                key={
                                                                    subGroup.group
                                                                }
                                                                className={`subgroup-${index}`}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color:
                                                                            "grey",
                                                                        fontSize:
                                                                            "12px",
                                                                    }}
                                                                >
                                                                    {
                                                                        subGroup.group
                                                                    }
                                                                </span>
                                                                <ul>
                                                                    {subGroup.children.map(
                                                                        (
                                                                            subItem: MyNav
                                                                        ) => (
                                                                            <li
                                                                                key={
                                                                                    subItem.title
                                                                                }
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
                            {/* <li>
                            <input />
                        </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

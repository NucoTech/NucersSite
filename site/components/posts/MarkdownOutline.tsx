import React from "react"

import marked from "marked"
import { isNightNow } from "@utils/utils"
import IconFont from "@components/common/IconFont"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"
import { inject, observer } from "mobx-react"

const mdOutlineStyle = require("@styles/components/posts/MdOutline.module.css")

interface HeadingContent {
    depth: number
    text: string
    href?: string
}

interface IMdOutlineProps extends OnlyDarkThemeStoreType {
    content: string
}

interface IMdOutlineStates {
    isOpen: boolean
    headingArray: Array<HeadingContent>
}

/**
 * 大纲生成组件
 */
@inject("darkThemeStore")
@observer
export default class MarkdownOutline extends React.Component<
    IMdOutlineProps,
    IMdOutlineStates
> {
    constructor(props: IMdOutlineProps) {
        super(props)
        this.state = {
            isOpen: false,
            headingArray: new Array<HeadingContent>(),
        }
    }
    static defaultProps = {
        content: "",
    }

    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        // 在此解析词法
        const { content } = this.props
        const token = new marked.Lexer().lex(content)
        const headingToken = token.filter(
            (item: any) => item.type === "heading"
        )
        const headingArray: Array<HeadingContent> = headingToken.map(
            (item: any) => {
                return {
                    depth: item.depth,
                    text: item.tokens[0].text,
                    href: item.tokens[0].href,
                }
            }
        )
        this.setState({
            headingArray,
        })
    }
    render() {
        const { isOpen, headingArray } = this.state
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                style={{
                    color: darkNow ? "white" : "black",
                    backgroundColor: darkNow ? "transparent" : "white",
                    padding: "5px",
                    boxShadow: "0 0 1px grey",
                    borderRadius: "5px"
                }}
            >
                <div
                    onClick={() => {
                        this.setState({
                            isOpen: !isOpen,
                        })
                    }}
                    style={{
                        userSelect: "none",
                        msUserSelect: "none",
                        WebkitUserSelect: "none",
                        MozUserSelect: "none",
                        cursor: "pointer",
                        padding: "10px",
                    }}
                >
                    <IconFont
                        type="nucers-arrow"
                        style={{
                            color: "var(--theme-post-add)",
                            transform: isOpen ? "rotate(90deg)" : "",
                        }}
                    />{" "}
                    大纲
                </div>
                {/* 控制大纲的伸展 */}
                <ul
                    className={mdOutlineStyle.outline}
                    style={{
                        height: isOpen ? "200px" : "0",
                    }}
                >
                    {headingArray.map((item: HeadingContent) => (
                        <li
                            key={`heading--${item.depth}-${
                                Math.random() * 100
                            }`}
                            style={{ marginLeft: `${item.depth * 7}px` }}
                        >
                            <a
                                href={item.href ? item.href : `#${item.text}`}
                                style={{
                                    color: item.href
                                        ? "#0366d6"
                                        : darkNow
                                        ? "white"
                                        : "black",
                                }}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

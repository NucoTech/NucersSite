import React from "react"

import marked from "marked"
import IconFont from "@components/common/tools/IconFont"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"
import { inject, observer } from "mobx-react"

const mdOutlineMbStyle = require("@styles/components/posts/MdOutlineMobile.module.css")

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
 * 大纲移动端组件
 */
@inject("darkThemeStore")
@observer
export default class MarkdownOutlineMobile extends React.Component<
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
                className={mdOutlineMbStyle.outlineMb}
                style={{
                    transform: isOpen ? "translateX(0px)" : "",
                    backgroundColor: darkNow
                        ? "var(--theme-commonbox-night)"
                        : "white",
                }}
            >
                <div
                    className={mdOutlineMbStyle.floatBtn}
                    onClick={() =>
                        this.setState({
                            isOpen: !isOpen,
                        })
                    }
                    style={{
                        backgroundColor: darkNow
                            ? "var(--theme-commonbox-night)"
                            : "white",
                    }}
                >
                    <IconFont
                        type="nucers-arrow"
                        style={{
                            color: "var(--theme-post-add)",
                            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
                            fontSize: "30px",
                            width: "30px",
                            height: "30px",
                        }}
                    />
                </div>
                <ul
                    className={mdOutlineMbStyle.outline}
                    style={{
                        backgroundColor: darkNow
                            ? "var(--theme-commonbox-night)"
                            : "white",
                        color: darkNow
                            ? "white"
                            : "var(--theme-commonbox-night)",
                    }}
                >
                    {headingArray.map((item: HeadingContent) => (
                        <li
                            key={`heading--${item.depth}-${Math.random() *
                                100}`}
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

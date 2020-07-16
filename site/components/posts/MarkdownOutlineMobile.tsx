import React from "react"

import marked from "marked"
import { isNightNow } from "@utils/utils"
import IconFont from "@components/common/IconFont"

const mdOutlineMbStyle = require("@styles/components/posts/MdOutlineMobile.module.css")

interface HeadingContent {
    depth: number
    text: string
    href?: string
}

interface IMdOutlineProps {
    content: string
}

interface IMdOutlineStates {
    isOpen: boolean
    headingArray: Array<HeadingContent>
}

/**
 * 大纲移动端组件
 */
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
        return (
            <div
                className={mdOutlineMbStyle.outlineMb}
                style={{
                    transform: isOpen ? "translateX(0px)" : "",
                    backgroundColor: isNightNow() ? "black" : "white",
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
                        backgroundColor: isNightNow() ? "black" : "white",
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
                        backgroundColor: isNightNow() ? "black" : "white",
                        color: isNightNow() ? "white" : "black",
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
                                        : isNightNow()
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

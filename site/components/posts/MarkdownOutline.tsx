import React from "react"

import marked from "marked"
import { isNightNow } from "@utils/utils"
import IconFont from "@components/common/IconFont"

const mdOutlineStyle = require("@styles/components/posts/MdOutline.css")

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
 * 大纲生成组件
 */
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
        console.log(headingArray)
    }
    render() {
        const { isOpen, headingArray } = this.state
        return (
            <div
                style={{
                    color: isNightNow() ? "white" : "black",
                    backgroundColor: isNightNow() ? "transparent" : "white",
                    padding: "5px",
                    boxShadow: "0 0 1px grey",
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
                        height: isOpen ? "300px" : "0",
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
                                    color: isNightNow() ? "white" : "black",
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

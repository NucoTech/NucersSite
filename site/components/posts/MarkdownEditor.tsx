import React from "react"
import Vditor from "vditor"
import IconFont from "@components/common/IconFont"

// 引入mobx对状态进行控制
import { inject, observer } from "mobx-react"

const mdEditorStyle = require("@styles/components/posts/MdEditor.module.css")

interface IMarkdownEditorProps {
    darkThemeStore?: any
}

interface IMarkdownEditorStates {
    vditor: any
}

// 修改夜间模式控制
@inject("darkThemeStore")
@observer
export default class MarkdownEditor extends React.Component<
    IMarkdownEditorProps,
    IMarkdownEditorStates
> {
    constructor(props: IMarkdownEditorProps) {
        super(props)
        this.state = {
            vditor: null,
        }
    }
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        // 引用主题
        const { darkNow } = this.props.darkThemeStore
        const themeLink = document.createElement("link")
        themeLink.rel = "stylesheet"
        themeLink.href = "https://cdn.jsdelivr.net/npm/vditor/dist/index.css"
        document.head.appendChild(themeLink)
        // 暂时未适配图片上传和录音上传
        // 可以考虑新增增图的内容插入
        const vditor = new Vditor("nucers-vditor-editor", {
            minHeight: 500,
            outline: false,
            width: "100%",
            placeholder: "写点什么吧...",
            theme: darkNow ? "dark" : "classic",
            toolbar: [
                "emoji",
                "headings",
                "bold",
                "italic",
                "strike",
                "link",
                "|",
                "list",
                "ordered-list",
                "check",
                "outdent",
                "indent",
                "|",
                "quote",
                "line",
                "code",
                "inline-code",
                "insert-before",
                "insert-after",
                "|",
                // "upload",
                // "record",
                "table",
                "|",
                "undo",
                "redo",
                "fullscreen",
                "edit-mode",
                {
                    name: "more",
                    toolbar: [
                        "both",
                        // "code-theme",
                        // "content-theme",
                        // "export",
                        "outline",
                        "preview",
                    ],
                },
            ],
            counter: {
                enable: true,
                type: "markdown",
            },
            preview: {
                delay: 500,
                theme: {
                    path:
                        "https://cdn.jsdelivr.net/npm/vditor@latest/dist/css/content-theme",
                    current: darkNow ? "dark" : "light",
                },
            },
            hint: {
                // at: (value: string) => {
                //     // 在此可以引用推文等
                //     // 这里需要fetch查询可引用范围数组
                //     console.log(value)
                //     return [
                //         {
                //             value: "@" + value,
                //             html: `<a>${value}</a>`,
                //         },
                //         {
                //             value: "@test",
                //             html: "test",
                //         },
                //     ]
                // },
            },
        })
        this.setState({
            vditor,
        })
    }

    componentDidUpdate() {
        const { vditor } = this.state
        const { darkNow } = this.props.darkThemeStore
        vditor.setTheme(
            darkNow ? "dark" : "classic",
            darkNow ? "dark" : "light"
        )
    }

    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div className={mdEditorStyle.content}>
                <div id="nucers-vditor-editor"></div>
                <ul
                    className={mdEditorStyle.helper}
                    style={{
                        backgroundColor: darkNow ? "#1d2125" : "#f6f8fa",
                    }}
                >
                    <li>
                        <IconFont
                            type="nucers-markdown"
                            title="Markdown基础教程"
                            style={{
                                fontSize: "20px",
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                            onClick={() => window.open("/p/md", "_blank")}
                        />
                    </li>
                    <li>
                        <IconFont
                            type="nucers-gantetu"
                            style={{
                                fontSize: "20px",
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                            title="Mermaid教程"
                            onClick={() =>
                                window.open(
                                    "https://mermaidjs.github.io/#/",
                                    "_blank"
                                )
                            }
                        />
                    </li>
                    <li>
                        <IconFont
                            type="nucers-echarts"
                            style={{
                                fontSize: "20px",
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                            title="Echarts绘图教程"
                            onClick={() =>
                                window.open(
                                    "https://echarts.apache.org/zh/tutorial.html",
                                    "_blank"
                                )
                            }
                        />
                    </li>
                    <li>
                        <IconFont
                            type="nucers-tex"
                            title="KaTeX教程"
                            style={{
                                fontSize: "20px",
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                            onClick={() =>
                                window.open("https://katex.org/", "_blank")
                            }
                        />
                    </li>
                    <li>
                        <IconFont
                            type="nucers-wuxianpu"
                            title="ABC记谱法教程"
                            style={{
                                fontSize: "20px",
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                            onClick={() =>
                                window.open(
                                    "https://www.biteyourownelbow.com/abcnotation.htm",
                                    "_blank"
                                )
                            }
                        />
                    </li>
                    <li>
                        <IconFont
                            type="nucers-liuchengtu"
                            title="Graphviz教程"
                            style={{
                                fontSize: "20px",
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                            onClick={() =>
                                window.open(
                                    "http://www.graphviz.org/",
                                    "_blank"
                                )
                            }
                        />
                    </li>
                </ul>
            </div>
        )
    }
}

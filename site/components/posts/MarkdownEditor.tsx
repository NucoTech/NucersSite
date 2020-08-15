import React from "react"
import Vditor from "vditor"
import IconFont from "@components/common/tools/IconFont"

import { injectCSSFromCDN } from "utils/utils"

import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"

import { message } from "antd"

const mdEditorStyle = require("@styles/components/posts/MdEditor.module.css")

const {
    vditorEditorTheme,
    vditorPreviewTheme,
    vditorUpload,
    vditorReUpload,
} = require("../../remote.local.json")

interface IMarkdownEditorStates {
    vditor: any
}

@inject("darkThemeStore")
@observer
export default class MarkdownEditor extends React.Component<
    OnlyDarkThemeStoreType,
    IMarkdownEditorStates
> {
    constructor(props: OnlyDarkThemeStoreType) {
        super(props)
        this.state = {
            vditor: null,
        }
    }
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }

    uploadSuccess = (callback) => {}

    uploadError = (callback) => {}

    componentDidMount() {
        // 引用主题
        const { darkNow } = this.props.darkThemeStore
        injectCSSFromCDN([vditorEditorTheme])
        // 暂时未适配图片上传和录音上传
        // 可以考虑新增增图的内容插入
        const vditor = new Vditor("nucers-vditor-editor", {
            minHeight: 500,
            height: 500,
            outline: false,
            width: "100%",
            placeholder: "写点什么吧...",
            theme: darkNow ? "dark" : "classic",
            mode: "sv",
            upload: {
                url: vditorUpload,
                linkToImgUrl: vditorReUpload,
                success: this.uploadSuccess,
                error: this.uploadError,
            },
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
                    path: vditorPreviewTheme,
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

    titleLexer = (title: string): Array<string> => {
        const ReEx: RegExp = new RegExp(/^\#([\S\s]+)\#([\S\s]+)$/)
        title = title.trim()
        if (!ReEx.test(title)) {
            return [title]
        }
        return [RegExp.$1.trim(), RegExp.$2.trim()]
    }

    tagsLexer = (tags: string): Array<string> => {
        return tags
            .replace(/；/g, ";")
            .split(";")
            .map((tag) => tag.trim())
    }

    sendPost = async () => {
        const { vditor } = this.state
        const title = document.getElementById(
            "nucers-title"
        ) as HTMLInputElement
        const tags = document.getElementById("nucers-tags") as HTMLInputElement
        const backTitle = this.titleLexer(title.value)
        const backTags = this.tagsLexer(tags.value)
        if (!backTitle[0] || (backTitle[1] && !backTitle[1])) {
            message.warn("请输入标题")
            return
        }

        if (backTags.length > 5) {
            message.warn("标签不要超过五个")
            return
        }
        // POST帖子
        const data = {
            title: backTitle.length === 1 ? backTitle[0] : backTitle[1],
            topic: backTitle.length === 1 ? "" : backTitle[0],
            tags: backTags,
            content: vditor.getValue(),
        }

        try {
            const res = await fetch("http://localhost:8000/p/new", {
                method: "POST",
                body: JSON.stringify(data),
            })
            console.log(await res.json())
        } catch (e) {
            console.log(e)
        }
    }

    render() {
        const { darkNow } = this.props.darkThemeStore
        return (
            <div className={mdEditorStyle.content}>
                <div className={mdEditorStyle.inputBox}>
                    <input
                        type="text"
                        placeholder="#关联话题输入# 文章标题"
                        id="nucers-title"
                    />
                    <button
                        className={mdEditorStyle.send}
                        onClick={() => this.sendPost()}
                    >
                        发布
                        <IconFont
                            type="nucers-fly"
                            style={{
                                marginLeft: "5px",
                            }}
                        />
                    </button>
                </div>
                <div id="nucers-vditor-editor"></div>
                <ul
                    className={mdEditorStyle.helper}
                    style={{
                        backgroundColor: darkNow ? "#1d2125" : "#f6f8fa",
                    }}
                >
                    <li>
                        <b
                            style={{
                                color: darkNow ? "#b9b9b9" : "black",
                            }}
                        >
                            教程
                        </b>
                    </li>
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
                <div className={mdEditorStyle.inputBox1}>
                    <input
                        placeholder="帖子标签, 使用分号 ( ; ) 分隔, 不超过五个"
                        type="text"
                        id="nucers-tags"
                    />
                </div>
            </div>
        )
    }
}

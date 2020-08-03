import React from "react"
import Vditor from "vditor"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"
import IconFont from "./IconFont"
import { injectCSSFromCDN } from "@utils/utils"

interface IShortMessageProps extends OnlyDarkThemeStoreType {
    type: "idea" | "comment"
}

interface IShortMessageStates {
    vditor: any
    content: string
}

/**
 * 基于Vditor的小编辑器组件，持久化存储，idea和comment的内容，在此注入检查登录态
 */
@inject("darkThemeStore")
@observer
export default class ShortMessage extends React.Component<
    IShortMessageProps,
    IShortMessageStates
> {
    constructor(props: IShortMessageProps) {
        super(props)
        this.state = {
            vditor: null,
            content: "",
        }
    }
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        // 引用主题，想法200，评论100？
        const { darkNow } = this.props.darkThemeStore
        const { type } = this.props
        injectCSSFromCDN(["https://cdn.jsdelivr.net/npm/vditor/dist/index.css"])
        const vditor = new Vditor("nucers-short-message", {
            height: 200,
            outline: false,
            width: "100%",
            placeholder: "写点什么吧...",
            theme: darkNow ? "dark" : "classic",
            mode: "sv",
            toolbar: ["preview", "fullscreen"],
            counter: {
                enable: true,
                max: type === "idea" ? 200 : 100,
                type: "markdown",
            },
            cache: {
                id: type,
            },
            preview: {
                mode: "editor",
                theme: {
                    current: darkNow ? "dark" : "light",
                    path: "/css",
                },
                hljs: {
                    enable: true,
                    style: !darkNow ? "igor" : "dracula",
                    lineNumber: true,
                },
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
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-end",
                }}
            >
                <div id="nucers-short-message"></div>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: darkNow ? "#1d2125" : "#f6f8fa",
                        borderRadius: "0 0 5px 5px",
                        padding: "5px",
                    }}
                >
                    <div
                        style={{
                            color: darkNow ? "rgb(189, 189, 189)" : "black",
                        }}
                    >
                        <IconFont
                            type="nucers-markdown"
                            title="Markdown教程"
                            style={{
                                cursor: "pointer",
                            }}
                        />{" "}
                        支持Markdown语法
                    </div>

                    <button
                        style={{
                            backgroundColor: "black",
                            cursor: "pointer",
                            color: "white",
                            borderRadius: "5px",
                            outline: "none",
                        }}
                    >
                        <IconFont
                            type="nucers-fly"
                            style={{ color: "white" }}
                        />{" "}
                        Send
                    </button>
                </div>
            </div>
        )
    }
}

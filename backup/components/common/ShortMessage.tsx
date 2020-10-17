import React from "react"
import Vditor from "vditor"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"
import IconFont from "./tools/IconFont"
import { injectCSSFromCDN } from "@utils/utils"
import { AuthenticatedStoreType } from "backup/stores/AuthenticatedStore"

interface IShortMessageProps
    extends OnlyDarkThemeStoreType,
        AuthenticatedStoreType {
    msgtype: "idea" | "comment"
}

interface IShortMessageStates {
    content: string
}

/**
 * 基于Vditor的小编辑器组件，持久化存储，idea和comment的内容
 */
@inject("authenticatedStore")
@inject("darkThemeStore")
@observer
export default class ShortMessage extends React.Component<
    IShortMessageProps,
    IShortMessageStates
> {
    constructor(props: IShortMessageProps) {
        super(props)
        this.state = {
            content: "",
        }
    }
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
            authenticatedStore: mobxStore.authenticatedStore,
        }
    }
    componentDidMount() {
        // 引用主题，想法200，评论100？
        const { darkNow } = this.props.darkThemeStore
        const { authed, utype } = this.props.authenticatedStore
        const { msgtype } = this.props
        if (authed && utype === "user") {
            injectCSSFromCDN([
                "https://cdn.jsdelivr.net/npm/vditor/dist/index.css",
            ])
            new Vditor("nucers-short-message", {
                height: 200,
                outline: false,
                width: "100%",
                placeholder: "写点什么吧...",
                theme: darkNow ? "dark" : "classic",
                mode: "sv",
                toolbar: ["preview", "fullscreen"],
                counter: {
                    enable: true,
                    max: msgtype === "idea" ? 200 : 100,
                    type: "markdown",
                },
                cache: {
                    id: msgtype,
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
        }
    }
    render() {
        const { msgtype } = this.props
        const { darkNow } = this.props.darkThemeStore
        const { authed, utype } = this.props.authenticatedStore
        return (
            <>
                {authed && utype === "user" && (
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
                                backgroundColor: darkNow
                                    ? "var(--theme-commonbox-content-night)"
                                    : "#f6f8fa",
                                borderRadius: "0 0 5px 5px",
                                padding: "5px",
                            }}
                        >
                            <div
                                style={{
                                    color: darkNow
                                        ? "rgb(189, 189, 189)"
                                        : "black",
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
                )}
                {!authed && (
                    <div
                        style={{
                            width: "100%",
                            height: "100px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: 600,
                            color: darkNow ? "white" : "black",
                            backgroundColor: darkNow
                                ? "var(--theme-commonbox-content-night)"
                                : "var(--theme-commonbox-light)",
                        }}
                    >
                        发表{msgtype === "idea" ? "想法" : "评论"}，请先
                        <a href="/login">登录</a>
                    </div>
                )}
            </>
        )
    }
}

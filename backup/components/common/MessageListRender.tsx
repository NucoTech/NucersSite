import React from "react"
import Vditor from "vditor"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"
import { ICommonMsg, ICommonMsgs } from "@utils/interfaces"

const messageListRenderStyle = require("@styles/components/common/MessageListRender.module.css")

interface IMessageListRenderProps extends OnlyDarkThemeStoreType {
    msgtype: "idea" | "comment"
    datas: ICommonMsgs
}

/**
 * 评论及想法加载组件
 */
@inject("darkThemeStore")
@observer
export default class MessageListRender extends React.Component<
    IMessageListRenderProps
> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    static defaultProps: IMessageListRenderProps = {
        msgtype: "idea",
        datas: [],
    }
    componentDidMount() {
        const { darkNow } = this.props.darkThemeStore
        const { datas } = this.props
        for (let item of datas) {
            Vditor.preview(
                document.getElementById(`ideas-${item.id}`) as HTMLDivElement,
                item.content,
                {
                    theme: {
                        path: "/css",
                        current: darkNow ? "dark" : "light",
                    },
                    hljs: {
                        enable: true,
                        lineNumber: true,
                        style: !darkNow ? "igor" : "dracula",
                    },
                }
            )
        }
    }
    render() {
        const { datas } = this.props
        return (
            <>
                <ul className={messageListRenderStyle.content}>
                    {datas.map((item: ICommonMsg) => (
                        <li key={item.id}>
                            <div className={messageListRenderStyle.title}>
                                <a href={`/u/${item.uid}`} title={item.name}>
                                    {item.name}
                                </a>
                                <div>发表了想法</div>
                            </div>

                            <div className={messageListRenderStyle.mdcontainer}>
                                <div
                                    id={`ideas-${item.id}`}
                                    className={messageListRenderStyle.mdrender}
                                ></div>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className={messageListRenderStyle.more}>
                    <a href="/idea">More...</a>
                </div>
            </>
        )
    }
}

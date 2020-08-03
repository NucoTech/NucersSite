import React from "react"
import Vditor from "vditor"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "@stores/DarkThemeStore"

const messageListRenderStyle = require("@styles/components/common/MessageListRender.module.css")

interface IMessageListRenderProps extends OnlyDarkThemeStoreType {
    type: "idea" | "comment"
}

const ideas = [
    {
        nickname: "werwerwerwe",
        uid: "3245345234fsddafa",
        id: "sdfsdfsdfsdfsasdadfsdf",
        content: "# 测试内容",
    },
    {
        nickname: "werwerwerwe",
        uid: "3245345234fsasdfda",
        id: "asdasdasdasasdfasdfd",
        content: '`console.log("Hello World")`',
    },
    {
        nickname: "werwerwerwe",
        uid: "3245345234fsda",
        id: "aasdasxsdfaasdfadsdqe",
        content: "* cease \n * sdfsdfs",
    },
    {
        nickname: "werwerwerwe",
        uid: "3245345234fsda",
        id: "sdafsdafaasdfadsdfssdf",
        content: "cEshcadasdfasd",
    },
    {
        nickname: "werwerwerwe",
        uid: "3245345234fsda",
        id: "sdfasdfasdfasdfadsdfasasd",
        content: "策划赛哈桑带深代售点",
    },
    {
        nickname: "测试",
        uid: "3gwerggw45trgqr",
        id: "efqggwedfbsdf",
        content: '```js\nconsole.log("Hello World")\n```\n',
    },
    {
        nickname: "Ceeeeaad",
        uid: "sadadadaasdfa",
        id: "5131rgqrgsdasgagas",
        content: [
            "$$",
            "\\nabla \\times H = J + \\frac{\\partial D}{\\partial t} \\newline",
            "\\nabla \\times E = - \\frac{\\partial B}{\\partial t} \\newline",
            "\\nabla \\cdot B = 0 \\newline",
            "\\nabla \\cdot D = \\rho",
            "$$",
        ].join("\n"),
    },
]

/**
 * 评论及想法加载组件
 */
@inject("darkThemeStore")
@observer
export default class MessageListRender extends React.Component<
    IMessageListRenderProps
> {
    static async getInitialProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    componentDidMount() {
        const { darkNow } = this.props.darkThemeStore
        for (let item of ideas) {
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
        return (
            <>
                <ul className={messageListRenderStyle.content}>
                    {ideas.map((item) => (
                        <li key={item.id}>
                            <div className={messageListRenderStyle.title}>
                                <a
                                    href={`/u/${item.uid}`}
                                    title={item.nickname}
                                >
                                    {item.nickname}
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

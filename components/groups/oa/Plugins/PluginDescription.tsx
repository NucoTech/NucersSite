import React from "react"

const pluginDescriptionStyle = require("@styles/components/groups/oa/PluginDescription.module.css")

interface PluginDescriptionProps {
    gid: string
    pluginId: string
}

interface PluginDescriptionStates {
    name: string
    icon: string
    description: string
    author: string
    url: string
    got: boolean
    getting: boolean
}

export default class PluginDescription extends React.Component<
    PluginDescriptionProps,
    PluginDescriptionStates
> {
    constructor(props: PluginDescriptionProps) {
        super(props)
        this.state = {
            name: "",
            icon: "",
            description: "",
            author: "",
            url: "",
            got: false,
            getting: false,
        }
    }
    componentDidMount() {
        this.setState({
            name: "Demo",
            icon: "/excel.png",
            description: "测试插件描述",
            author: "Herbert He",
            url: "https://goer.icu",
            got: true,
            getting: false,
        })
    }
    render() {
        const {
            name,
            icon,
            description,
            author,
            url,
            got,
            getting,
        } = this.state
        return (
            <div className={pluginDescriptionStyle.content}>
                <div className={pluginDescriptionStyle.header}>
                    <div className={pluginDescriptionStyle.headerLeft}>
                        <img alt="icon" src={icon} width="50px" height="50px" />
                        <div className={pluginDescriptionStyle.infos}>
                            <div className={pluginDescriptionStyle.name}>
                                {name}
                            </div>
                            <div>Author: {author}</div>
                            <div>
                                Website: <a href={url}>{url}</a>
                            </div>
                        </div>
                    </div>
                    <button
                        className={pluginDescriptionStyle.getPlugin}
                        disabled={got}
                    >
                        {got ? "已拥有插件" : "获取插件"}
                    </button>
                </div>
                <div className={pluginDescriptionStyle.description}>
                    {description}
                </div>
                {getting && (
                    <div className={pluginDescriptionStyle.mask}>
                        插件获取中...
                    </div>
                )}
            </div>
        )
    }
}

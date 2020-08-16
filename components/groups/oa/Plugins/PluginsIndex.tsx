import React from "react"
import PluginItem from "./PluginItem"

const pluginsIndex = require("@styles/components/groups/oa/PluginsIndex.module.css")

interface PluginsIndexProps {
    gid: string
}

export default class PluginsIndex extends React.Component<PluginsIndexProps> {
    render() {
        return (
            <div className={pluginsIndex.content}>
                <div>
                    <div className={pluginsIndex.title}>可用插件</div>
                    <div className={pluginsIndex.plugins}>
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                    </div>
                </div>
                <div className={pluginsIndex.market}>
                    <div className={pluginsIndex.title}>插件市场</div>
                    <div className={pluginsIndex.plugins}>
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                        <PluginItem
                            icon="/excel.png"
                            name="测试插件"
                            pluginId="demo"
                        />
                    </div>
                </div>
            </div>
        )
    }
}

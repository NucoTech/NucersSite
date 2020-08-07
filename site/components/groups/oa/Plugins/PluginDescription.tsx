import React from "react"

interface PluginDescriptionpProps {
    gid: string
    pluginId: string
}

export default class PluginDescription extends React.Component<
    PluginDescriptionpProps
> {
    render() {
        return <div>插件{this.props.pluginId}描述页</div>
    }
}

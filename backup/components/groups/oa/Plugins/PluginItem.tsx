import React from "react"
import { OnlyDarkThemeStoreType } from "backup/stores/DarkThemeStore"
import { inject, observer } from "mobx-react"
import { AuthenticatedStoreType } from "backup/stores/AuthenticatedStore"
const pluginItemStyle = require("@styles/components/groups/oa/PluginItem.module.css")

interface PluginItemProps
    extends OnlyDarkThemeStoreType,
        AuthenticatedStoreType {
    icon: string
    name: string
    pluginId: string
}

@inject("darkThemeStore", "authenticatedStore")
@observer
export default class PluginItem extends React.Component<PluginItemProps> {
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
            authenticatedStore: mobxStore.authenticatedStore,
        }
    }
    render() {
        const { icon, name, pluginId } = this.props
        const { darkNow } = this.props.darkThemeStore
        const { uid } = this.props.authenticatedStore
        return (
            <div
                className={
                    darkNow
                        ? pluginItemStyle.itemDark
                        : pluginItemStyle.itemLight
                }
            >
                <a href={`/g/oa/${uid}/plugins/${pluginId}`}>
                    <img
                        alt="plugin"
                        src={icon}
                        title={name}
                        width="30px"
                        height="30px"
                    />
                </a>
            </div>
        )
    }
}

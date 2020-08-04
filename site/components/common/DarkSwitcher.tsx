import React from "react"
import { inject, observer } from "mobx-react"
import IconFont from "./IconFont"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"

/**
 * 开关灯组件
 */
@inject("darkThemeStore")
@observer
export default class DarkSwitcher extends React.Component<
    OnlyDarkThemeStoreType
> {
    static async getInitialProps({ mobxStore }) {
        return { darkThemeStore: mobxStore.darkThemeStore }
    }

    render() {
        const { darkNow, setDark } = this.props.darkThemeStore
        return (
            <IconFont
                type="nucers-deng"
                style={{
                    color: "white",
                    fontSize: "23px",
                }}
                title={darkNow ? "开灯" : "关灯"}
                onClick={() => {
                    sessionStorage.setItem(
                        "darkNow",
                        String(!darkNow ? String(1) : String(0))
                    )
                    setDark()
                    location.reload()
                }}
            />
        )
    }
}

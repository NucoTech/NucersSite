import React from "react"
import { inject, observer } from "mobx-react"
import IconFont from "./IconFont"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"

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
            <div
                title={darkNow ? "开灯" : "关灯"}
                onClick={() => {
                    sessionStorage.setItem(
                        "darkNow",
                        String(!darkNow ? String(1) : String(0))
                    )
                    setDark()
                    location.reload()
                }}
                style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "30px",
                    backgroundColor: darkNow
                        ? "var(--theme-bg-color-night)"
                        : "white",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    boxShadow: "0 0 2px grey",
                    position: "fixed",
                    right: "50px",
                    bottom: "50px",
                    zIndex: 99999,
                }}
            >
                <IconFont
                    type="nucers-deng"
                    style={{
                        color: darkNow ? "white" : "black",
                        fontSize: "30px",
                    }}
                />
            </div>
        )
    }
}

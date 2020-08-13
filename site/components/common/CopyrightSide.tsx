import React from "react"
import { inject, observer } from "mobx-react"
import { OnlyDarkThemeStoreType } from "stores/DarkThemeStore"
import { ICopyright } from "@utils/interfaces"

export interface ICopyrightSide extends OnlyDarkThemeStoreType, ICopyright {}

@inject("darkThemeStore")
@observer
export default class CopyrightSide extends React.Component<ICopyrightSide> {
    constructor(props: ICopyrightSide) {
        super(props)
    }
    static defaultProps: ICopyrightSide = {
        ICP: "晋ICP备xxxxxxxx号",
        GongAn: "晋公网安备xxxxxxxxxxxx号",
        address: "山西省太原市尖草坪区学院路三号中北大学",
        email: "herberthe@nucosc.com",
    }
    static async getServerSideProps({ mobxStore }) {
        return {
            darkThemeStore: mobxStore.darkThemeStore,
        }
    }
    render() {
        const { ICP, GongAn, address, email } = this.props
        const { darkNow } = this.props.darkThemeStore
        return (
            <div
                style={{
                    padding: "20px",
                    backgroundColor: darkNow
                        ? "var(--theme-bg-color-night)"
                        : "white",
                    boxShadow: "0 0 1px grey",
                    marginTop: "10px",
                    color: darkNow ? "white" : "black",
                    width: "100%",
                }}
            >
                <div
                    style={{
                        fontSize: "small",
                        color: "grey",
                        padding: "3px 0",
                    }}
                >
                    {address}
                </div>
                <div
                    style={{
                        fontSize: "small",
                        color: "grey",
                        padding: "3px 0",
                    }}
                >
                    联系:{" "}
                    <a href={`mailto:${email}`} style={{ color: "grey" }}>
                        {email}
                    </a>
                </div>
                <div
                    style={{
                        fontSize: "small",
                        color: "grey",
                        padding: "3px 0",
                    }}
                >
                    {ICP}
                </div>
                <div
                    style={{
                        fontSize: "small",
                        color: "grey",
                        padding: "3px 0",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <img
                        src="/gongan.png"
                        height="18px"
                        width="18px"
                        alt="gongan"
                    />
                    {GongAn}
                </div>
            </div>
        )
    }
}

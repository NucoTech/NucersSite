import React from "react"
import { isNightNow } from "@utils/utils"

export interface ICopyrightSide {
    ICP: string
    Gongan?: string
    address: string
    email: string
}

export default class CopyrightSide extends React.Component<ICopyrightSide> {
    constructor(props: ICopyrightSide) {
        super(props)
    }
    static defaultProps: ICopyrightSide = {
        ICP: "晋ICP备xxxxxxxx号",
        Gongan: "晋公网安备xxxxxxxxxxxx号",
        address: "山西省太原市尖草坪区学院路三号中北大学",
        email: "herberthe@nucosc.com",
    }
    render() {
        const { ICP, Gongan, address, email } = this.props
        return (
            <div
                style={{
                    padding: "20px",
                    backgroundColor: isNightNow() ? "tranparent" : "white",
                    boxShadow: "0 0 1px grey",
                    marginTop: "20px",
                    color: isNightNow() ? "white" : "black",
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
                    {Gongan}
                </div>
            </div>
        )
    }
}

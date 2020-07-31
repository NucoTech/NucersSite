import React from "react"
import { backOAURL } from "@utils/utils"

export default class OA404Shower extends React.Component {
    render() {
        return (
            <div
                style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        fontSize: "xx-large",
                        fontWeight: 300,
                    }}
                >
                    404 | 没有找到你需要的业务
                </div>
                <div
                    style={{
                        marginTop: "45px",
                    }}
                >
                    返回
                    <a
                        style={{
                            marginLeft: "10px",
                            textDecoration: "underline",
                        }}
                        href={backOAURL("")}
                    >
                        控制台
                    </a>
                </div>
            </div>
        )
    }
}

import React from "react"
import { wordsPaint } from "@utils/utils"

export default class LoginDisplay extends React.Component {
    componentDidMount() {
        let c: HTMLCanvasElement = document.getElementById(
            "word-canvas"
        ) as HTMLCanvasElement
        let ctx: CanvasRenderingContext2D = c.getContext("2d")
        ctx.font = `${
            document.body.clientWidth <= 1024
                ? (document.body.clientWidth - 40) / 18
                : (document.body.clientWidth - 200) / 2 / 30
        }px SimHei`
        wordsPaint.forEach((item: string, index: number) => {
            ctx.fillText(item, 0, index * 30)
        })
    }
    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                    padding: "20px 0",
                }}
            >
                <canvas
                    id="word-canvas"
                    height={`${
                        document.body.clientWidth <= 1024
                            ? ((document.body.clientWidth - 40) / 18) * 10
                            : ((document.body.clientWidth - 200) / 30 / 2) * 12
                    }px`}
                    width={`${
                        document.body.clientWidth <= 1024
                            ? document.body.clientWidth - 40
                            : (document.body.clientWidth - 200) / 2 - 100
                    }px`}
                ></canvas>
                Copyright &copy; NUCOSC All Rights Reserved！
            </div>
        )
    }
}

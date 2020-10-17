import React from "react"
import IconFont from "@components/common/tools/IconFont"

const sideToolsStyle = require("@styles/components/posts/SideTools.module.css")

interface ISideToolsProps {}

interface ISideToolsStates {
    liked?: boolean
}

/**
 * 文章点赞、分享侧边组件，重写此部分样式
 */
export default class SideTools extends React.Component<
    ISideToolsProps,
    ISideToolsStates
> {
    constructor(props: ISideToolsProps) {
        super(props)
        this.state = {
            liked: false,
        }
    }
    componentDidMount() {
        // 在此获取liked
    }
    changeLiked = () => {
        // 改变喜欢
        this.setState({
            liked: !this.state.liked,
        })
    }
    render() {
        const { liked } = this.state
        return (
            <div className={sideToolsStyle.tools}>
                <div className={sideToolsStyle.toolbox}>
                    <div
                        className={sideToolsStyle.singleTool}
                        onClick={() => this.changeLiked()}
                    >
                        <IconFont
                            type="nucers-like"
                            style={{
                                fontSize: "30px",
                                color: liked ? "#f78fb3" : "white",
                            }}
                        />
                    </div>
                    <div
                        className={sideToolsStyle.singleTool}
                        onClick={() => {
                            document.body.scrollTop = document.getElementById(
                                "comments-box"
                            ).offsetTop
                            document.documentElement.scrollTop = document.getElementById(
                                "comments-box"
                            ).offsetTop
                            console.log(
                                document.getElementById("comments-box")
                                    .offsetTop
                            )
                        }}
                    >
                        <IconFont
                            type="nucers-comment"
                            style={{ fontSize: "30px", color: "white" }}
                        />
                    </div>
                    {/* 暂时不设收藏 */}
                </div>
                <div className={sideToolsStyle.toolbox}>
                    <div
                        className={sideToolsStyle.singleTool}
                        title="回到顶部"
                        onClick={() => {
                            document.body.scrollTop = 0
                            document.documentElement.scrollTop = 0
                        }}
                    >
                        <IconFont
                            type="nucers-back-to-top"
                            style={{ fontSize: "30px", color: "deepskyblue" }}
                        />
                    </div>
                    {/* 分享套件 */}
                    {/* 回到顶部 */}
                </div>
            </div>
        )
    }
}

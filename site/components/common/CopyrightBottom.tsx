import React from "react"
import IconFont from "./IconFont"

const copyrightBottomStyle = require("@styles/components/common/CopyrightBottom.module.css")

export default class CopyrightBottom extends React.Component {
    render() {
        return (
            <div className={copyrightBottomStyle.content}>
                <div className={copyrightBottomStyle.commonLine}>
                    <div className={copyrightBottomStyle.contentICP}>
                        山西省太原市尖草坪区学院路三号中北大学
                    </div>
                    <div>
                        <span className={copyrightBottomStyle.contentText}>
                            内容协议{" "}
                        </span>
                        <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh">
                            CC-BY-SA 4.0
                        </a>
                        <span className={copyrightBottomStyle.contentText}>
                            {" "}
                            &copy;NUCOSC开源
                        </span>
                    </div>
                </div>

                <div className={copyrightBottomStyle.commonLine}>
                    <div className={copyrightBottomStyle.contentICP}>
                        herberthe@nucosc.com
                    </div>
                    <div className={copyrightBottomStyle.contentICP}>
                        <img src="/gongan.png" width="16" height="16" />
                        公网安备晋xxxxxxxxxxxxxxxxxx号
                    </div>
                </div>
                <div className={copyrightBottomStyle.commonLine}>
                    <div>
                        <a href="https://github.com/NUCOSC">
                            <IconFont
                                type="nucers-github"
                                style={{
                                    color: "grey",
                                    padding: "5px",
                                    fontSize: "16px",
                                }}
                            />
                        </a>
                        <a href="https://gitee.com/NUCOSC">
                            <IconFont
                                type="nucers-gitee"
                                style={{
                                    color: "red",
                                    padding: "5px",
                                    fontSize: "16px",
                                }}
                            />
                        </a>
                        <a href="https://www.nucosc.com">NUCOSC</a>
                    </div>
                    <div>
                        <span className={copyrightBottomStyle.contentICP}>
                            晋ICP备xxxxxxxx号
                        </span>
                        <span className={copyrightBottomStyle.contentICP}>
                            {" "}
                            ·{" "}
                            <a href="https://github.com/NUCOSC/Nucers">
                                Nucers
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

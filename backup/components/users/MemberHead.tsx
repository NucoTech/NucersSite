import React from "react"
import IconFont from "@components/common/tools/IconFont"

const memberHead = require("@styles/components/members/MemberHead.module.css")

interface IMemberHeadProps {
    avatar: string
    nickname: string
    social?: Array<string>
    slogan?: string
    type?: "official" | "community" | "person" | "lab"
    typeInfo?: string
}

/**
 * 已被废弃！！！
 */
export default class MemberHead extends React.Component<IMemberHeadProps> {
    // ICON颜色
    static VIPColor: Map<string, string> = new Map<string, string>([
        ["official", "#0abde3"],
        ["community", "#10ac84"],
        ["person", "#ff9f43"],
        ["lab", "#feca57"],
    ])
    render() {
        const { avatar, type, typeInfo, nickname } = this.props
        return (
            <div className={memberHead.body}>
                <div className={memberHead.bodyLeft}>
                    <div className={memberHead.avatarBox}>
                        <img
                            src={avatar}
                            alt="avatar"
                            height="100%"
                            width="100%"
                            style={{ borderRadius: "10px" }}
                        />
                        {type && (
                            <IconFont
                                type="nucers-vip"
                                style={{
                                    fontSize: "20px",
                                    position: "absolute",
                                    right: 0,
                                    bottom: 0,
                                    color: MemberHead.VIPColor.get(type),
                                }}
                                title={
                                    type === "person"
                                        ? `个人认证: ${typeInfo}`
                                        : `组织认证: ${typeInfo}`
                                }
                            />
                        )}
                    </div>
                </div>
                <div className={memberHead.bodyRight}>
                    {/* 昵称 */}
                    {/* 社交媒体 */}
                    {/* 标语 */}
                    <div>{nickname}</div>
                    <div>slogan</div>
                    <div></div>
                </div>
            </div>
        )
    }
}
